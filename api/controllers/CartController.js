/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    addToCart: async function (req, res) {

    
        //const message = sails.getInvalidIdMsg(req.params);
    
        //if (message) return res.badRequest(message);
      
        if (!await Cart.findOne(req.params)) return res.notFound();
    
        if (!await Product.findOne(req.body)) return res.notFound();   

        var product = await Product.findOne(req.body)
        var cart = await Cart.findOne(req.params)
        if (product.inventory_count === 0) return res.badRequest("This item is out of stock.")
        await Cart.addToCollection(cart.id, 'hasProduct').members(product.id);
        await Cart.update(cart.id).set({total: cart.total + product.price })
        return res.ok('Product added successfully');
    
    },

    create: async function (req, res) {
        if (!req.body.username)
            return res.badRequest("Add username to cart!");
        await Cart.create(req.body);
        return res.send(200, "Cart created!")
    },

    getProducts: async function (req, res) {
    
        //const message = sails.getInvalidIdMsg(req.params);
    
        //if (message) return res.badRequest(message);
        var cart = await Cart.findOne(req.params);
        var model = await Cart.findOne(cart.id).populate('hasProduct');
        if (!model) return res.notFound();
        return res.status(200).json({products: model.hasProduct, total: cart.total});
    
    },

    checkout: async function (req, res) {
    
        //const message = sails.getInvalidIdMsg(req.params);
    
        //if (message) return res.badRequest(message);
        var cart = await Cart.findOne(req.params)
        var model = await Cart.findOne(cart.id).populate('hasProduct');
        if (!model) return res.notFound();
        if(model.hasProduct.length === 0) return res.badRequest("No items to checkout.")
        for (let i = 0; i < model.hasProduct.length; i++) {
            product = model.hasProduct[i]
            await Cart.addToCollection(cart.id, 'hasProduct').members(product.id);
            await Product.update(product.id).set({inventory_count: product.inventory_count - 1})
        }
        await Cart.update(cart.id).set({total: 0 })
        return res.status(200).send("Checkout completed.")
    
    },
    

};

