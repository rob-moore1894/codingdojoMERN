const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a name"],
    },
    species: {
        type: String,
        required: [true, "Must have a species"],
        minlength: [3, "Species name must have at least 3 characters"]
    },
    role: {
        type: String,
        required: [true, "Must have a role"],
        minlength: [4, "Your role is too short"]
    },
    specialAbility: {
        type: String,
        required: [true, "Everyone is special"],
        minlength: [4, "Special ability must be at least 4 characters"]
    },
    age: {
        type: Number,
        required: [true, "You were born, right?!"],
        min: [1, "You must be born to be on this site"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Say something awesome"],
        minlength: [10, "Your catchphrase must be longer than that!"]
    }
}, {timestamps: true})

const Creature = mongoose.model("Creature", CreatureSchema);

module.exports = Creature;