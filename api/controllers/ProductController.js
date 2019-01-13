/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        if (typeof req.body === "undefined")
            return res.badRequest("Form-data not received.");
        await Product.create(req.body);
        return res.send(200, "Product created!")
    },

    getProduct: async function (req, res) {
        var product = await Product.findOne(req.params);
        if (!product) return res.notFound();
        return res.status(200).json(product);
    }

};

