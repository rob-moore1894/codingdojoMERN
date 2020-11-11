const express = require("express"); 
const faker = require("faker");
const app = express();
const port = 8000; 

class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}

// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json(new User()); 
})

// Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new" , (req, res) => {
    res.json(new Company());
})

//Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company" , (req, res) => {
    res.json([new User(), new Company()]);
})

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);