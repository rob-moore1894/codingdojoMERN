class Cards{
    constructor(name, cost){
        this.name = name;
        this.cost = cost; 
    }
}

class Units extends Cards{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power; 
        this.res = res; 
    }

    summon(){
        console.log(`${this.name} is in the fight!`)
        console.table(this)
    }

    attack(target){
        if (target instanceof Units){
            console.log(`${this.name} attacks ${target.name}`)
            target.res -= this.power;
            if(target.res <= 0){
                target.res = 0;
            }
            console.table(target) 
        } else {
            console.log("You must attack a Unit!")
        }
    }
}

class Effects extends Cards{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text; 
        this.stat = stat; 
        this.magnitude = magnitude; 
    }
    
    play(target){
        if (target instanceof Units){
            console.log(`${this.name} is played =>`)
            if(this.stat == "power"){
                target.power += this.magnitude
                console.log(`${target.name}'s power is now ${target.power}`)
                console.table(target)
            } else if (this.stat == "resilience"){
                target.res += this.magnitude
                console.log(`${target.name}'s resilience is now ${target.res}`)
                console.table(target)
            }
        } else {
            throw new Error ("Target must be a unit!");
        }
    }
}

const redNinja = new Units("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Units("Black Belt Ninja", 4, 5, 4);
const hardAlgo = new Effects("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const unhandledPromRej = new Effects("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const pairProg = new Effects("Pair Programming", 3, "Increase target's power by 2", "power", 2)

redNinja.summon(); 
console.log('==========================================')
hardAlgo.play(redNinja);
console.log('==========================================')
blackNinja.summon();
unhandledPromRej.play(redNinja)
console.log('==========================================')
pairProg.play(redNinja)
redNinja.attack(blackNinja)