const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/belt-exam-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongoose connected"))
    .catch(err => console.log("Mongoose not successful", err))