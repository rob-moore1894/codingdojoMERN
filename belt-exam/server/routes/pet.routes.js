const PetController = require("../controllers/pet.controller");
const Pet = require("../models/pet.model");

module.exports = app => {
    // GET all pets
    app.get("/api/pets", PetController.findAllPets);

    // GET one pet
    app.get("/api/pets/:_id", PetController.findOnePet);

    // CREATE one pet
    app.post("/api/pets/new", PetController.createPet);

    // DELETE a pet
    app.delete("/api/pets/delete/:_id", PetController.deletePet);

    // UPDATE a pet
    app.put("/api/pets/update/:_id", PetController.updatePet); 
}