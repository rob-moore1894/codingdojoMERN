const CreatureController = require("../controllers/creature.controller");

module.exports = app => {
    // Get all
    app.get("/api/creatures", CreatureController.findAllCreatures);
    // Get one
    app.get("/api/creatures/:_id", CreatureController.findOneCreature);
    // Create one
    app.post("/api/creatures/new", CreatureController.createCreature);
    // Delete one
    app.delete("/api/creatures/delete/:_id", CreatureController.deleteCreature);
    // Update one
    app.put("/api/creatures/update/:_id", CreatureController.updateCreature);
}