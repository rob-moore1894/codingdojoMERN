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

// GET one product
module.exports.findOneProduct = (req, res) => {
    console.log(`Getting ID: ${req.params._id}`);
    Product.findOne({_id: req.params._id})
        .then(singleProduct => res.json({product: singleProduct}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}