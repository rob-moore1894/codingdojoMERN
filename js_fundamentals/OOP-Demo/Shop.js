const Tricycle = require('./Tricycle.js')
const Unicycle = require('./Unicycle.js')

class Shop {
    constructor(){
        this.inventory = []; 
        for(let i = 0; i < 10; i++){
            this.inventory.push(new Unicycle("gabby purple", "very spiky"))
        }
        for(let i = 0; i < 10; i++){
            this.inventory.push(new Tricycle("aleister black", false))
        }
    }

    rideAll(){
        this.inventory.forEach(c => c.ride()); 
    }
}

module.exports = Shop;