const express = require("express");
const app = express();
const port = 8000; 
const cors = require("cors");

app.use(cors());

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

// require the routes of my project
require("./server/routes/plant.routes")(app);

app.listen(port, () => console.log(`Ready to go on port ${port}!`));