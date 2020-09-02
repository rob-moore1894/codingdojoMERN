class Ninja{
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3; 
    }
    
    sayName(){
        console.log(`Konnichiwa, ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name}; Strength: ${this.strength}; Speed: ${this.speed}; Health: ${this.health}`)
    }

    drinkSake(){
        this.health += 10
    }
}

const kOmega = new Ninja("Kenny Omega", 100); 
kOmega.sayName()
kOmega.showStats()
kOmega.drinkSake()
kOmega.showStats()