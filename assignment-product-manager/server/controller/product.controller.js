const Product = require("../model/product.model");

// GET all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
};

// CREATE a product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({products: newProduct}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}; 

// DELETE a product
module.exports.deleteProduct = (req, res) => {
    Product.remove({_id: req.params._id})
        .then(res.json({message: "Product deleted!"}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}