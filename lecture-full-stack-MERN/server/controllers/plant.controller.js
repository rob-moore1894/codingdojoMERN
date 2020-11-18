const Plant = require("../models/plant.model");

module.exports.findAllPlants = (req, res) => {
    Plant.find()
        .then(allPlants => res.json({plants: allPlants}))
        .catch(err => res.json({message: "Something went wrong finding plants", error: err}));
};

module.exports.findSinglePlant = (req, res) => {
    console.log(`Getting ID: ${req.params._id}`);
    Plant.findOne({_id: req.params._id})
        .then(singlePlant => res.json({plant: singlePlant}))
        .catch(err => res.json({message: "Something went wrong finding that plant", error: err}));
}

module.exports.createPlant = (req, res) => {
    console.log("Creating the plant")
    Plant.create(req.body)
        .then(newPlant => res.json({plant: newPlant}))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePlant = (req, res) => {
    Plant.remove({_id: req.params._id})
        .then(plant => {
            console.log(plant);
            res.json({message: "Delete Successful"})
        })
        .catch(err => res.status(400).json(err))
}

module.exports.updatePlant = (req, res) => {
    Plant.update({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            type: req.body.type,
            color: req.body.color
        }
    })
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json(err));
}