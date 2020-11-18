const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    type: {
        type: String
    },
    color: {
        type: String
    }
}); 

const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant; 