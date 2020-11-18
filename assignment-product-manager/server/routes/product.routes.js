const ProductController = require("../controller/product.controller");

module.exports = app => {
    // Get all
    app.get("/api/products", ProductController.findAllProducts);
    // Get one
    app.get("/api/products/:_id", ProductController.findOneProduct); 
    // Create one
    app.post("/api/products/new", ProductController.createProduct);
}