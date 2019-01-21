/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {

        if (!req.body.title || !req.body.price || !req.body.inventory_count)
            return res.badRequest("Missing attributes");
        product = await Product.create(req.body).fetch();
        return res.status(201).location(`/product/${product.id}`).send("Product created")
    },

    getProduct: async function (req, res) {
        var product = await Product.findOne(req.params);
        if (!product) return res.notFound();
        return res.status(200).json(product);
    },

    getAll: async function (req, res) {
        
        var products = (req.param('instock') === 'true') ? await Product.find({inventory_count: {'>': 0}}) : await Product.find(); //tests instock param, if it's true find products with inventory_count > 0
        return res.status(200).json(products);
    }

};

