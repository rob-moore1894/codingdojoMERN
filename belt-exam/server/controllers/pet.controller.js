const Pet = require("../models/pet.model");

//GET all pets
module.exports.findAllPets = (req, res) => {
    Pet.find()
        .sort({type:1})
        .then(allPets => res.json({pets : allPets}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

// GET one pet
module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json({pet : onePet}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

// CREATE pet
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({pets : newPet}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

// DELETE pet
module.exports.deletePet = (req, res) => {
    Pet.remove({_id: req.params._id})
        .then(res.json({message: "Pet gone to forever home... hopefully"}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

// UPDATE pet
module.exports.updatePet = (req, res) => {
    Pet.update({_id: req.params._id}, {
        $set : {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3
        }
    }, {runValidators: true} )
        .then(onePet => res.json({pet : onePet}))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}