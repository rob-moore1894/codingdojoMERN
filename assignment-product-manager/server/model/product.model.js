const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"],
    },
    price: {
        type: Number,
        required: [true, "Nothing is free!"]
    },
    description: {
        type: String
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; 