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

    attack(target){
        target.res -= this.power; 
    }
}

class Effects extends Cards{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text; 
        this.stat = stat; 
        this.magnitude = magnitude; 
    }

    effectRes(targetUnit){
        this.magnitude > 0 ? targetUnit.res += this.magnitude : targetUnit.res -= this.magnitude
        return this; 
    }

    effectPower(targetUnit){
        this.magnitude > 0 ? targetUnit.power += this.magnitude : targetUnit.power -= this.magnitude; 
        return this; 
    }
    
    play(target){
        if (target instanceof Unit){
            
        } else {
            throw new Error ("Target must be a unit!");
        }
    }
}