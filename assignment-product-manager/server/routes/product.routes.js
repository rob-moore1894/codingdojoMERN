const ProductController = require("../controller/product.controller");

module.exports = app => {
    // Get all
    app.get("/api/products", ProductController.findAllProducts);
    // Create one
    app.post("/api/products/new", ProductController.createProduct);
    
}