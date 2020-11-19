const Creature = require("../models/creature.model");

module.exports.findAllCreatures = (req, res) => {
    Creature.find()
        .then(allCreats => res.json({creatures : allCreats}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.findOneCreature = (req, res) => {
    Creature.findOne({_id: req.params._id})
        .then(oneCreat => res.json({creatures : oneCreat}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.createCreature = (req, res) => {
    Creature.create(req.body)
        .then(newCreat => res.json({creatures : newCreat}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.deleteCreature = (req, res) => {
    Creature.remove({_id: req.params._id})
        .then(res.json({message: "Your creature no longer exists"}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.updateCreature = (req, res) => {
    Creature.update({_id: req.params._id}, {
        $set : {
            name: req.body.name,
            species: req.body.species,
            role: req.body.role,
            age: req.body.age,
            catchPhrase: req.body.catchPhrase,
            specialAbility: req.body.specialAbility
        }
    }, {runValidators: true} )
        .then(oneCreat => res.json({creatures : oneCreat}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}