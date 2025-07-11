class vehicles{
    constructor(m,c,f,b){
        this.mode = m
        this.color = c
        this.fuel = f
        this.brand = b
    }
}

class car extends vehicles{
    constructor(t,d,bt,m,c,f,b){
        super(m,c,f,b)
        this.tyres = t
        this.door = d
        this.bluetooth = bt
    }
}


class Aeroplane extends vehicles{
    constructor(isCom,isLar, hah, m,c,f,b){
        super(m,c,f,b)
        this.isCommercial = isCom
        this.isLarge = isLar
        this.haveAirHostess = hah 
    }

}

class Boat extends vehicles{
    constructor(e,hs, isCargo, m,c,f,b){
        super(m,c,f,b)
        this.engine = e
        this.haveSwimPool = hs
        this.isCargo = isCargo
    }
}

let boat1 = new Boat(true,false,true,"Engine","MultiColour","Electric", "Titanic")
console.log(boat1)

let aero1 = new Aeroplane(true,false,true,"Air","Black","Petrol","Air India")
console.log(aero1)

let car1 = new car(4,5,true,"Land","Red","petrol","Audi")
console.log(car1)