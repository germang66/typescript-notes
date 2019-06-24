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


//Conditional statement in typing
type numberOrString<T> = T extends number ? number : string;
function isNumberOrString<T>(input: numberOrString<T>) {
    console.log(`numberOrString: ${input}`);
}
isNumberOrString<number>(1);
//isNumberOrString<number>("test"); //throw error

//distributed conditional types
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


//conditional type inference

//keyof

//keyof with number

//mapped types

//Partial, Readonly, Record, and Pick
