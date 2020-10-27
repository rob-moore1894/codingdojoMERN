const Cycle = require('./Cycle.js');

class Tricycle extends Cycle {
    constructor(color, rearWheelDrive){
        super(3, color)
        this.rearWheels = rearWheelDrive;  
    }
}

module.exports = Tricycle; 