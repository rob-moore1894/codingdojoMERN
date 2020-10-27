const Cycle = require('./Cycle.js');
const Unicycle = require('./Unicycle.js');
const Shop = require('./Shop');

var myCycle = new Cycle(2, "blue");
console.log(myCycle.ride());

var embarrassment = new Unicycle("pink", "flaming pleather");
console.log(embarrassment.ride()); 

var NotBikeShoppe = new Shop();
NotBikeShoppe.rideAll(); 