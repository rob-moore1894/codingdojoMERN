class Cycle {
    constructor(numWheels, color){
        this.wheels = numWheels;
        this.color = color;
        console.log("Cycle constructor");
    }
    
    ride(){
        console.log("Hey, I'm ridin here!");
        return this.wheels; 
    }
}

module.exports = Cycle; 