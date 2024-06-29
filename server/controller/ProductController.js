const Product = require('../model/Product');

const ProductController = {
    getAllProducts: async function(req, res, next) {
        try {
            const productList = await Product.find();
            res.status(200).json(productList);
        }catch (err){
            console.error(err);
            res.status(500).json({error: 'Something went wrong..!'})
        }
    },

    saveProduct: async function(req, res, next){
        try {
            const productData = req.body;
            const product = await Product.create(productData);
            res.status(201).json(product);
        }catch (err){
            console.error(err);
            res.status(500).json({error: 'Something went wrong..!'})
        }
    },

    getProduct: async function(req, res, next){
        try {
            const productId = req.params.id;
            const product = await Product.findOne({id: productId})
            res.status(200).json(product);
        }catch (err){
            console.error(err);
            res.status(500).json({error: 'Something went wrong..!'})
        }
    },

    deleteProduct: async function(req, res, next){
        try {
            const productId = req.params.id;
            const product = await Product.findOneAndDelete({id: productId})
            res.status(203).json(product);
        }catch (err){
            console.error(err);
            res.status(500).json({error: 'Something went wrong..!'})
        }
    },

    updateProduct: async function(req, res, next){
        try {
            const productId = req.params.id;
            const productData = req.body;
            const product = await Product.findOneAndUpdate({id: productId},productData);
            res.status(201).json(product);
        }catch (err){
            console.error(err);
            res.status(500).json({error: 'Something went wrong..!'})
        }
    },
}

module.exports = ProductController;