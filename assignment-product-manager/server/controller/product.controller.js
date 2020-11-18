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

// UPDATE a product
module.exports.updateProduct = (req, res) => {
    Product.update({_id: req.params._id}, {
        $set: {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        }
    })
    .then(product => res.json(product))
    .catch(err => res.json({message: "Something went wrong while updating!", error: err}))
}

// DELETE a product
module.exports.deleteProduct = (req, res) => {
    Product.remove({_id: req.params._id})
        .then(product => {
            console.log(product);
            res.json({message: "DELETE! DELETE! DELETE!"})
        })
        .catch(err => res.json({message: "Kicked out at 2!", error: err}))
}