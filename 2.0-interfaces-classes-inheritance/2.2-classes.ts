

class SimpleClass {
    id: number | undefined ;
    print() : void {
        //access of property of the class with this.
        console.log(`SimpleClass with id ${this.id}`); 
    }
}

//using the class 
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 123;
mySimpleClass.print();

//Class is a definition of an object
//Interface is the definition of custom type
//difference is that interface dont requiere implement functions and properties
//interface describe common behaviour of a group of class.

interface IFlyable {
    fly() : void;
}

class Bird implements IFlyable {
    fly() {
        console.log("fly like bird");
    }
}

class Falcon implements IFlyable {
    fly() {
        console.log("fly like falcon");
    }
}

function doFly( a : IFlyable) {
    a.fly();
}

doFly(new Bird());
doFly(new Falcon());

// Class constructor + class functions
class Duck {
    id: number;
    name: string;
    //overload of constructor (same that functions)
    constructor(_id: string, _name: string);
    constructor(_id: number, _name: string);
    constructor(_id: any, _name: any) {
        //type guard to not convert id in string when '_id' is string
        if (typeof _id === "number") {
            this.id = _id;
        }
        this.name = _name;
    }
    walk(b: any) : void {
        console.log(`do walk ${b}`);
    }
}

//class modifiers
// public and private attributes
class OtherDuck {
    public name: string | undefined;
    private id: number;
    constructor(_id : number) {
        this.id = _id;
    }
}

let otherDuck = new OtherDuck(10);
otherDuck.name = "the duck";
//otherDuck.id = 5; //throw error

//consturctor asset modifiers
class NextDuck {
    //define a public variable id and private varible name
    constructor(public id: number, private name: string){
    }
} 

//readonly: once the value of the property has been set, it is not able to 
//  be modified
class ClassWithReadOnly {
    readonly name: string;
    constructor(_name: string) {
        this.name = _name;
    }
    setReadOnly(_name: string) {
        //this.name = _name; // generate a compile error
    }
}

//Class property accessors
//ES5 accessors, function that is called when user get or set a property
class UsingAccessors {
    private _name: string | undefined;
    get name() {
        return "hello " + this._name;
    }
    set name(name: string) {
        console.log(`set name ${name}`);
        this._name = name;
    } 
} 

let usingAccessors = new UsingAccessors();
usingAccessors.name = "juan";

//static functions | attribute
class Utils {
    static multiplier: number = 5;
    static sum(a: number, b:number) : number {
        return (a + b) * this.multiplier;
    }
}
let mySum = Utils.sum(2,3);
console.log(`my sum is ${mySum}, multipler: ${Utils.multiplier}`);

//namespaces
namespace SecondNameSpace {
    export class NameSpaceClass {
        name: string | undefined;
    }
}

let secondNameSpace = new SecondNameSpace.NameSpaceClass();
secondNameSpace.name = "hola mundo"; 



