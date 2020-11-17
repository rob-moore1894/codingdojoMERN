const Joke = require("../models/jokes.model")

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.getOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
        .then(oneJoke => res.json({jokes: oneJoke}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({jokes: newJoke}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.remove({_id: req.params._id})
        .then(res.json({message: "Your joke is gone"}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.update({_id: req.params._id}, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
        .then(oneJoke => res.json({jokes: oneJoke}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}; 

//GET a random joke
module.exports.randomJoke = (req, res) => {
    Joke.find()
        .then(jokes => {
            let rand = Math.floor(Math.random()*jokes.length);
            res.json({joke: jokes[rand]});
        })
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}