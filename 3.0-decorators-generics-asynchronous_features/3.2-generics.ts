//Generics

class PrinterList<T> {
    printList( list: Array<T>): void {
        let result = "";
        for (let i = 0; i < list.length; i++) {
            if (i > 0)
                result += ",";
            result += list[i].toString();
        }
        console.log(result);
    }
}

var integerPrinter = new PrinterList<number>();
var stringPrinter = new PrinterList<string>();
integerPrinter.printList([1,2,3]);
stringPrinter.printList(['hello','world']);

/** 
*  Constraining the type of T
*/
interface IFlyable {
    distance: number;
    fly() : void;
}

class Falcon implements IFlyable {
    distance = 10;   
    fly() {
        console.log("Falcon Fly");
    }
}

class Bird implements IFlyable {
    distance = 2;
    fly() {
        console.log("Bird Fly");
    }
}
//use generic but constraining the type of T
class DistanceFly<T extends IFlyable> {
    checkBydistance(flyable: T): void {
        if (flyable.distance > 5) {
            console.log("Great flying");
        } else {
            console.log("Common flying");
        } 
    }
}
let distanceFly = new DistanceFly();
distanceFly.checkBydistance(new Falcon());
distanceFly.checkBydistance(new Bird());


/** 
* generic interfaces
*/
interface IFlyableUpdatable <T extends IFlyable> {
    addDistance(flyable: T, amount: number): void;
}

//use of generic interface
class FlyablePrinter<T extends IFlyable> implements IFlyableUpdatable<T> {

    addDistance(flyable: T, amount: number):void {
         flyable.distance += amount;
    }
    
    checkBydistance(flyable: T) : void {
        if (flyable.distance > 5) {
            console.log("Great flying");
        } else {
            console.log("Common flying");
        } 
    } 
}

let bird = new Bird();
let flyablePrinter = new FlyablePrinter();
flyablePrinter.addDistance(bird, 20);
flyablePrinter.checkBydistance(bird);


//creating new objects within generics

class GenericCreator<T> {
    //refer to T by its constructor function
    create(arg1: { new(): T}): T {
        return new arg1();
    }
}

let creator = new GenericCreator<Bird>();
let bird2 : Bird = creator.create(Bird);
bird2.fly();


//# Conditional statement in typing
type numberOrString<T> = T extends number ? number : string;
function isNumberOrString<T>(input: numberOrString<T>) {
    console.log(`numberOrString: ${input}`);
}
isNumberOrString<number>(1);
//isNumberOrString<number>("test"); //throw error

//# Distributed conditional types
type dateOrNumberOrString<T> = 
    T extends Date ? Date :
    T extends number ? Date | number :
    T extends string ? Date | number | string : never;


//using a distributed type for the type of T (type of T can be either a string,
// number, Date, or boolean)
function compareValues<T extends string | number | Date | boolean>
    (input: T, compareTo: dateOrNumberOrString<T>) {
        console.log("do stuff..")
    }

compareValues(new Date(), new Date()); //Date can only be compare with Date
compareValues(1, new Date()); //number can be compare with number or **Date**
compareValues(1, 2);  //number can be compare with **number** or **Date**
compareValues("1",1); //string can be compare with **number**, date or string
compareValues("1",new Date());  //string can be compare with number, **date** or string
compareValues("1","1"); //string can be compare with number, date or **string**
//other combination will throw a error.


//# Conditional type inference
//defined a conditional type named MyInferred, check if our type has a or b property
// if have infer the type of U from a or b property.
type MyInferred<T> = T extends { a: infer U, b: infer U} ? U : T;
type inferNumber = MyInferred<{a: number, b: number}>; //U is number
let first : inferNumber = 1; // first is type number

type inferNumString = MyInferred<{a: string, b: number}>;//U is string | number
let second : inferNumString = "text"; //second is string or number
second = 22; //second as number


//# keyof
interface IBuild {
    id: number,
    address: string,
    fax: string
}
// keyof generate a string literal type based on the properties of a given type.
function usingKeyOf(key: keyof IBuild, value: IBuild) {
    console.log(`${key}  : ${value[key]}`);
}

let myBuild : IBuild = { id: 1, address: "address 1234", fax: "123123123" };
usingKeyOf("id", myBuild);
usingKeyOf("address", myBuild);
usingKeyOf("fax", myBuild);

//# keyof with number
enum Geographic {
    CONGO = 99,
    BOLIVIA = 101
}

const capitals = {
    [Geographic.CONGO] : "Brazzaville",
    [Geographic.BOLIVIA]: "La Paz"
}

function getCapital<T, K extends keyof T>(key: K, map: T) : T[K] {
    return map[key];
}

let capitalCongo = getCapital(Geographic.CONGO, capitals);
console.log(`capitalCongo = ${capitalCongo}`);
let capitalBolivia = getCapital(Geographic.BOLIVIA, capitals);
console.log(`capitalBolivia = ${capitalBolivia}`);

//# mapped types
//basic interface with required properties
interface IPropRequired {
    a: string;
    b: boolean;
}
//take all properties of type T and include in new type PropOptional,
// all properties are in this type optional
type IPropOptional<T> = {
    [K in keyof T]?: T[K];
}

//we mapped the original type to other where the properties are optional
let obj1 : IPropOptional<IPropRequired> = { a: "test", b: false };
let obj2 : IPropOptional<IPropRequired> = { a: "test2" };

//# Partial, Readonly, Record, and Pick
//we use partial to create types same as the original but with optional properties
type partialExample = Partial<IPropRequired>;

//we use readonly to create types where all properties are readonly
type readonlyExample = Readonly<IPropRequired>;

//we use pick to create type that are a subset of properties from original type
type examplePick = Pick<IPropRequired, "a">
let obj5: examplePick = { a: "test"  }

//we use record to create a new type by specifying a list of properties 
// in this case two properties of type string
type exampleRecord = Record<"d" | "f", string>;
let obj4: exampleRecord = { d: "test", f: "test" };
