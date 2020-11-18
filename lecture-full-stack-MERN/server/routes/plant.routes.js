const PlantController = require("../controllers/plant.controller");

module.exports = app => {
    app.get("/api/plants", PlantController.findAllPlants);
    app.get("/api/plants/:_id", PlantController.findSinglePlant);
    app.post("/api/plants/new", PlantController.createPlant);
}
