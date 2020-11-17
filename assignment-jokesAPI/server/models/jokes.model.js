const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "A good joke has a good setup..."],
        minlength: [10, "Setup must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "The best jokes have a punchline..."],
        minlength: [3, "Punchline must have a "]
    }
}, {timestamps: true})

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;