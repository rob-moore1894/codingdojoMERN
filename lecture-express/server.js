const express = require("express");
const app = express();
const port = 8000; 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const threeMovies = [
    {movie: "Spider-Man 3", desc:"What if Spider-man were goth"},
    {movie: "Spy Kids 3", desc:"What if Elijah Wood was actually good"}
]

app.get("/api", (req, res) => {
    console.log("Hello from the backend console!");
    res.json({message: "Hello Universe!"});
})

app.post("/api/repeat", (req, res) => {
    console.log(req.body); 
    res.json({message: "Message successful!"});
})

app.get("/api/movies", (req, res) => {
    res.json(threeMovies);
})

app.post("/api/movies/add", (req, res) => {
    threeMovies.push(req.body); 
    res.json({message: "Success"});
})

app.listen(port, () => console.log(`Running on port ${port}!`))