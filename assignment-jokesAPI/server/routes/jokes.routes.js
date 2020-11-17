const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    // GET all
    app.get("/api/jokes", JokeController.getAllJokes);
    // Random 
    app.get("/api/jokes/random", JokeController.randomJoke);
    // GET one
    app.get("/api/jokes/:_id", JokeController.getOneJoke);
    // CREATE one
    app.post("/api/jokes/new", JokeController.createJoke);
    // DELETE one
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
    // UPDATE one
    app.put("/api/jokes/update/:_id", JokeController.updateJoke); 
}