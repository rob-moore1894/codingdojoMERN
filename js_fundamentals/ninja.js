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

class Sensei extends Ninja{
    constructor(name, health, speed , strength , wisdom ){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log('People can spot a phony and I think young people can spot a phony')
        return this;
    }
}

const kOmega = new Ninja("Kenny Omega", 100); 
kOmega.sayName().showStats()
kOmega.drinkSake().showStats()

const tKhan = new Sensei("Tony Khan");
tKhan.sayName().showStats()
tKhan.speakWisdom().showStats()