//inheritance interface

interface IAnimal {
    id: number | undefined;
}

interface IFish extends IAnimal {
    name: string | undefined;
}

class Shark implements IFish {
    id: number | undefined;
    name: string | undefined;
}

// class inheritance

class AnimalClass implements IAnimal {
    id: number | undefined;
}

class FishClass extends AnimalClass 
        implements IFish  {
    name: string | undefined;
}

//TS does not support the concept of multiple inheritance.
// however class can implement multiple interface.

interface IMyAInterface {
    id: number | undefined;
}
interface IMyBInterface {
    name: string | undefined;
}

class MyclassAB implements IMyAInterface, IMyBInterface {
    id: number | undefined;
    name: string | undefined;
}

//super keyword
// call base function with the same name of the function
// ex. constructor overriding and function overriding

class OtherAnimalClass {
    constructor(private _id: number) {
    }
    eat() : string {
        return `id: ${this._id} is eating`;
    }
}

class OtherFishClass extends OtherAnimalClass {
    constructor(_id: number, private _name: string) {
        super(_id);
    }
    eat() : string {
        return `name: ${this._name} ` + 
            `${super.eat()}`
    }
}

let otherFishClass = new OtherFishClass(1, "shark");
console.log(otherFishClass.eat());

//protected attributes
class SmallAnimal {
    protected id: number | undefined;
    getId() : number {
        return this.id;
    }
}

class Mouse extends SmallAnimal {
    constructor() {
        super();
        this.id = 0;
    }
}

let mouse = new Mouse();
//mouse.id = 1; //Throw error
console.log(`mouse id ${mouse.getId()}`); // mouse id 0

//abstract class: class that is designed to be derived from.

abstract class AbstractAnimal {
    public id: number | undefined;
    public name: string | undefined;
    abstract getEat() : string;
    public printEat() {
        console.log(this.getEat());
    }
}

class SmallShark extends AbstractAnimal {
    getEat() : string {
        return `${this.id} with name ${this.name} is eating`;       
    }
}

class SharkEater extends SmallShark {
    public sharks : SmallShark[] | undefined;
    getEat() : string {
        return super.getEat() 
            + `, sharks eaten: ${this.sharks.length}`;   
    }
}

var smallShark = new SmallShark();
smallShark.id = 1;
smallShark.name = "sharkName";
smallShark.printEat(); //  name: shark id: 1 is eating

var sharkEater = new SharkEater();
sharkEater.id = 2;
sharkEater.name = "SharkEater NAme";
sharkEater.sharks = [];
sharkEater.printEat(); //  2 with name SharkEater NAme is eating, sharks eaten: 0

//instance of

class A {}
class BfromA extends A {}
class CfromA extends A {} 
class DfromC  extends CfromA {}

function checkInstanceOf(value: A | BfromA | CfromA | DfromC) {
    console.log(`check instance of: `);
    if (value instanceof A) { console.log(`found instance of A`); }
    if (value instanceof BfromA) { console.log(`found instance of BfromA`);  }
    if (value instanceof CfromA) { console.log(`found instance of CfromA`); }
    if (value instanceof DfromC) { console.log(`found instance of DfromC`); }
}

checkInstanceOf(new A());
checkInstanceOf(new BfromA());
checkInstanceOf(new CfromA());
checkInstanceOf(new DfromC());

// OUTPUT:
// check instance of:
// found instance of A
// check instance of:
// found instance of A
// found instance of BfromA
// check instance of:
// found instance of A
// found instance of CfromA
// check instance of:
// found instance of A
// found instance of CfromA
// found instance of DfromC