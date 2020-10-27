const Cycle = require('./Cycle.js');

class Unicycle extends Cycle {
    constructor(color, seatMaterial){
        super(1, color)
        this.seatMaterial = seatMaterial; 
    }

    ride(){
        console.log("Honk honk"); 
    }
}

module.exports = Unicycle; 