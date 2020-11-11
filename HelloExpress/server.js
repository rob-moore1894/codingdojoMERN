const express = require("express");
const app = express();
const port = 8000; 

const users = [
  { firstName: "Alfie", lastName: "Peters"},
  { firstName: "Chris", lastName: "Jericho"},
  { firstName: "Brody", lastName: "Lee"},
  { firstName: "Leva", lastName: "Bates"}
]; 

// Express middleware functions - responsible for providing and parsing the request.body data
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  //res.send("Our express api server is now sending this over to the browser");
  res.json({message : "What's it all about?!"})
});

app.get("/api/users", (req, res) => {
  res.json( users ); 
})

// GET data from a URL
// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
  // get the 'id' variable from req.params
  console.log(req.params.id); 
  // assuming this id is the index of the users array, we could return one user
  res.json(users[req.params.id]); 
}) ;

// UPDATE data using a PUT request
app.put("/api/users/:id", (req, res) => {
  // get the 'id' variable from req.params
  const id = req.params.id;
  users[id] = req.body; 
  // ALWAYS need to respond with something
  res.json({status: "ok"});
});

// DELETE data using a delete request
app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1); 
  res.json({status: "ok"});
});

app.post("/api/users", (req, res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // Push the data into the users array
  users.push(req.body); 
  // ALWAYS respond with something
  res.json({status: "ok"}); 
}); 

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
