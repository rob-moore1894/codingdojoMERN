class Ninja{
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3; 
    }
    
    sayName(){
        console.log(`Konnichiwa, ${this.name}`)
        return this;
    }

    showStats(){
        console.log(`Name: ${this.name}; Strength: ${this.strength}; Speed: ${this.speed}; Health: ${this.health}`)
        return this;
    }

    drinkSake(){
        this.health += 10
        return this; 
    }
}

var kenny = new Ninja("Kenny", 100);
kenny.sayName().showStats().drinkSake().showStats(); 