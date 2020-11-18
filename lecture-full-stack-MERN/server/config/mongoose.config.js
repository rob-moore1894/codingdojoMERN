const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/plant_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("There was a problem connecting to the DB", err))