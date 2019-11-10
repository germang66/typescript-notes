/*
## Content

* Inferred type
* Basic types
* enum 
* numeric separator
* functions
* advanced types
* Interfaces
* classes
* inheritance 
* decorators
* generics
* asynchronous

*/


console.log(`
/**#####################
 * #  Inferred type
########################*/
 `);

/**
 * When types are not declared, are inferred
 */ 
var inferredString = "this is a string";
var inferredNumber = 1;

//inferredNumber = inferredString; //THROW ERROR
// - error TS2741: Property 'name' is missing in type '{ id: number; }' but required in type '{ name: string; id: number; }'. 

/**
 * Duck typing
 */
var complexType = { name: "myName", id: 1};
//same number of attributes is the same inferred type
complexType = { id: 2, name: "anotherName" };
//different number of attribute is not the same inferred type
//complexType = { id: 3 }; THROW ERROR: require type


console.log(`
/**#####################
 * # Basic types
########################*/
 `);

//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.`;

//Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuple
let x: [string, number] = ["hello", 10];

//Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//Void
function warnUser(): void {
    console.log("This is my warning message");
}

//Null and Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
//By default null and undefined are subtypes of all other types. 

//Never
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
try {
    error("my error");
}catch(e){

}

//Object
function create(o: object | null): void
{
    if (o === null) console.log("yep, is null");
}

create({ prop: 0 }); // OK
create(null); // OK

//Type assertion
//Type assertions have two forms. One is the “angle-bracket” syntax:
let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;
//And the other is the as-syntax:
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;


console.log(`
/**#####################
 * # enum
#####################*/
 `);

enum NumericState {
    FIRST, SECOND, THIRD
}
console.log(NumericState.SECOND); // # 1
console.log(NumericState["SECOND"]); // # 1
console.log(NumericState[1]); // # SECOND

enum NumericState2 {
    FIRST = "Primero", SECOND = "Segundo", THIRD = "Tercero"
}
console.log(NumericState2.SECOND); // # Segundo


console.log(`
/**#####################
 * # numeric separator
#####################*/
 `);

let oneMillion = 1_000_000;
console.log(oneMillion);   //# 1000000
let limeGreenColor = 0x00_FF_00;
console.log(limeGreenColor); //# 65280




console.log(`
/**#####################
 * # functions
#####################*/
 `);


/**
 * Return types 
 */

function greeting() : string {
    return "hello wolrd";
}
console.log(greeting());

//annonymus function
var gretting2 = function() : string {
    return "hello world again";
}
console.log(gretting2());


/**
 * Optional parameter 
 */

function sum( a: number, b: number, c?: number) : number {
    return a + b + c;
}
console.log(sum(1,2,3)); // 6
console.log(sum(1,2));   // NaN


/**
 * default parameter
 */
function sum2( a: number, b: number, c: number = 3) : number {
    return a + b + c;
}
console.log(sum2(1,2,3)); // 6
console.log(sum2(1,2));   // 6


/**
 * rest parameters
 */
function sum3( a: number, b: number, ...restParam: number[]) : number {
    let result = a + b;
    for (let v of restParam) {
        result = result + v;   
    }
    return result;
}
console.log(sum3(1,2,3,4,5)); // 15
console.log(sum3(1,2,3,4));   // 10


/**
 * Callback
 */

//define as paramter a callback that recive a string as parameter and 
// return nothing
function doSomethingWithCallback(
    initialText: string,
    callback: (initialText: string) => void   
) {
    callback(initialText);
}

function callbackFunction( greeting: string) {
    console.log(`hello ${greeting}`);
}
doSomethingWithCallback("world", callbackFunction);
// # hello world

/**
 * override function
 */

function add( a: number, b: number) : number;
function add( a: string, b: string) : string;
function add( a: any, b: any) : any {
    return a + b;
}
console.log(add(1,2));      //# 3
console.log(add("1","2"));  //# 12



console.log(`
/**#####################
 * # advanced types
 #####################*/
 `);

/**
 * Union types 
*/
var stringOrNumber : string | number;
stringOrNumber = 1;
console.log(stringOrNumber); //# 1
stringOrNumber = "a1";
console.log(stringOrNumber); //# a1

/**
 *  type guards
*/
//is required the guards 'if typeof ...' to the function dont throw error
// becouse the + operation and the union types
function foo (
    a: number | string,
    b: number | string
) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    return a.toString() + b.toString();
}
console.log(foo(1,2));      //# 3
console.log(foo("1","2"));  //# 12
console.log(foo(1,"2"));    //# 12


/**
 * type aliases
*/
type sOn = string | number;
function foo2(
    a: sOn, b: sOn
) {
    return a.toString() + b.toString();
}
console.log(foo2(1,2)); //# 12

//also con be used in callback parameters
type callbackWithString = (input: string) => void;
function foo3(input: string ,cb: callbackWithString) {
    cb(input);
}
foo3("hey!", (a) => {console.log(`${a} you!`)}); //# hey! you!

/**
 * Object rest and spread 
 */
let firstObj = { id: 1, name: "firstObj" };
//copy properties to new object
let secondObj = { ...firstObj };
console.log(`secondObj : ${JSON.stringify(secondObj)}`);
//with arrays
let arr1 = ["hello1, hello2"];
let arr2 = [
    "hello3",
    ...arr1,
    "hello4"
]
console.log( `arr2 : ${JSON.stringify(arr2)}`);


/**
 * tuples 
*/
let myTuple: [string, boolean] = ["test", false];
//WAY 1 to tuple destructuring
console.log(`[0] ${myTuple[0]}`); //# test
console.log(`[1] ${myTuple[1]}`); //# false
//console.log(`[2] ${myTuple[2]}`); //# error TS2493: Tuple type '[string, boolean]' of length '2' has no element at index '2'. 
//WAY 2 to tuple destructuring
let [t1, t2] = myTuple;
console.log(`[0] ${t1}`); //# test
console.log(`[1] ${t2}`); //# false
//let [t3,t4,t5] = myTuple; //# error TS2493: Tuple type '[string, boolean]' of length '2' has no element at index '2'.

//Optional element
let myTuple2: [string, boolean?] = ["test2"];
console.log(`[0] ${myTuple2}`); //# test

//Non-null assertion operator
function notNullParam(e: string | null) {
    function guard() {
        if (e == null || e == undefined) e = 'noNAme';
    }
    guard();
    let s = e!.toUpperCase();//indicate to ts that e cant be null
    console.log(`not Null param ${s}`);
}
notNullParam("myName"); //# not Null param MYNAME
notNullParam(null);//#not Null param NONAME

//using tuples and rest in a function definition
function foo4( ...args: [number, string, boolean]) {
    let [arg1, arg2, arg3] = args;
    console.log(`arg1 ${arg1}`); 
    console.log(`arg2 ${arg2}`); 
    console.log(`arg3 ${arg3}`); 
}
foo4(1, "hello", false);

//OUTPUT
//arg1 1
//arg2 hello
//arg3 false


//using tuples and rest in their definition
type restTupletype = [number, ...string[]];
let a1 : restTupletype = [1, "hello", "world"];

/**
 * Bigint
*/
//53bits number
let high53 = 9_007_199_254_740_991;
for (let i = 0; i < 10; i++) {
    console.log(`${i} : ${high53 + i}`);
}
//0 : 9007199254740991
//1 : 9007199254740992  <--- strange behaviour
//2 : 9007199254740992  <---
//3 : 9007199254740994  <---
//4 : 9007199254740996  <---
//5 : 9007199254740996
//6 : 9007199254740996
//7 : 9007199254740998
//8 : 9007199254741000
//9 : 9007199254741000
console.log("\n\n");
//Requiere target "esnext" (see tsconfig.json)
let bigIntNumber : bigint = 9_007_199_254_740_991n;
for (let i = 0; i < 10; i++) {
    console.log(`${i} : ${bigIntNumber + BigInt(i)}`);
}

//0 : 9007199254740991
//1 : 9007199254740992
//2 : 9007199254740993
//3 : 9007199254740994
//4 : 9007199254740995
//5 : 9007199254740996
//6 : 9007199254740997
//7 : 9007199254740998
//8 : 9007199254740999
//9 : 9007199254741000

console.log(`
/**#####################
 * # Interfaces
 #####################*/
 `);

//interfaces; mechanism to define what properties and methods an object must implement

interface ICustom {
    id: string,
    value: number,
    other?: string //optional property
}
let something : ICustom = { id: "ID123", value: 123 }
console.log(`something: ${JSON.stringify(something)}`);

//in operator:
// TS allows us to generate type guards for interface using this operator, to
// test whether an interface has a particular property
if ('value' in something) {
    console.log(`id: ${something.id}`);
}


console.log(`
/**#####################
 * # classes
 #####################*/
 `);

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


console.log(`
/**#####################
 * # inheritance
 #####################*/
 `);

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

console.log(`
/**#####################
 * # decorators
 #####################*/
 `);

// Decoratos allow us inject code into the actual definition of a class, 
//  property, function or method parameter.

// to use decorators in tsconfig.json, set experimentalDecorators to true

//Class decorators have a single parameter (the class prototype)
function simpleDecorator(consturctor: Function) {
    console.log('simpleDecorator called');
}

function secondDecorator(consturctor: Function) {
    console.log('secondDecorator called');
}

@simpleDecorator
@secondDecorator
class ClassWithDecorators {

}

let firstInstance = new ClassWithDecorators();
let secondInstance = new ClassWithDecorators();

//output:
//secondDecorator called
//simpleDecorator called
//decorators are called when the class is defined not when the object is instanced
// are called in reverse order


//to pasing parameter we use decorator factory


function decoratorWithParameter(name: string) {
    return function( consturctor: Function) {
        console.log(`decorator function called: ${name}`)
    }
}

@decoratorWithParameter("testParameter")
class classDecoratorWithParameter {
}
//OUTPUT: decorator function called: testParameter


//class decorator parameters (add property to instance using decorator)
function decoratorTestParameter(constructor: Function) {
    constructor.prototype.testProperty = 'testProperty';
}

@decoratorTestParameter
class Foo {
}
let foo11 = new Foo();
console.log(`foo test parameter:  ${(<any>foo11).testProperty}`);
//OUTPUT:  foo test parameter:  testProperty


//property decorators
//property decorator have two parameters (the class prototype and the property name)
function propertyDesc(target: any, propertyKey: string) {
    console.log(`target: ${target}`);
    console.log(`target.constructor: ${target.constructor}`);
    if (typeof(target) === 'function') {
        //with static attributes 'target.constructor.name' return 'Function'
       console.log(`class name: ${target.name}`);
    } else {
        console.log(`class name: ${target.constructor.name}`);
    }
    console.log(`propertyKey : ${propertyKey}`);
}
class ClassWithPropertyDesc {
    @propertyDesc
    attribute: string;
}
//OUTPUT: 
//
//target: [object Object]
//target.constructor: function ClassWithPropertyDesc() {
//    }
//class name: ClassWithPropertyDesc
//propertyKey : attribute

//static property decorators
class StaticClasswithPropertyDesc {
    @propertyDesc
    static attribute: string;
}
//OUTPUT
//
//target: function StaticClasswithPropertyDesc() {
//}
//target.constructor: function Function() { [native code] }
//class name: StaticClasswithPropertyDesc
//propertyKey : attribute

//method decorators 
//method decprators have three parameters (the class prototype, the method name and 
//the method descriptor (optional))
function mDecorator (
    target:any,
    methodName: string,
    descriptor?: PropertyDescriptor)
{
    console.log(`target: ${target}`);
    console.log(`methodName: ${methodName}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}

class Foo2 {
    @mDecorator
    print(output: string) {
        console.log(`Foo2.print (${output}) called.`);
    }
}
//OUTPUT
//
//target: [object Object]
//methodName: print
//target[methodName] : function (output) {
//        console.log("Foo2.print (" + output + ") called.");
//}

//parameter decorators
function pDecorator(
    target: any,
    methodName: string,
    parameterIndex: number)
{
    console.log(`target: ${target}`);
    console.log(`methodName: ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);
}

class Foo3 {
    print(@pDecorator value: string) {

    }
}
//OUTPUT
//
//target: [object Object]
//methodName: print
//parameterIndex : 0


console.log(`
/**#####################
 * # generics
 #####################*/
 `);


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
interface IFlyable2 {
    distance: number;
    fly() : void;
}

class Falcon2 implements IFlyable2 {
    distance = 10;   
    fly() {
        console.log("Falcon Fly");
    }
}

class Bird2 implements IFlyable2 {
    distance = 2;
    fly() {
        console.log("Bird Fly");
    }
}
//use generic but constraining the type of T
class DistanceFly<T extends IFlyable2> {
    checkBydistance(flyable: T): void {
        if (flyable.distance > 5) {
            console.log("Great flying");
        } else {
            console.log("Common flying");
        } 
    }
}
let distanceFly = new DistanceFly();
distanceFly.checkBydistance(new Falcon2());
distanceFly.checkBydistance(new Bird2());


/** 
* generic interfaces
*/
interface IFlyableUpdatable <T extends IFlyable2> {
    addDistance(flyable: T, amount: number): void;
}

//use of generic interface
class FlyablePrinter<T extends IFlyable2> implements IFlyableUpdatable<T> {

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

let bird = new Bird2();
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

let creator = new GenericCreator<Bird2>();
let bird2 : Bird2 = creator.create(Bird2);
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

console.log(`
/**#####################
 * # asynchronous
 #####################*/
 `);

//# Promises
//Are techniques for standardizing async processing like callbacks.
//With callbacks code can become rather complex and repetitive.
function delayedResponse(callback: Function) {
    function delayMethod(){
        callback();
        console.log("finish example callback");
    }
    //simulate delay process
    setTimeout(delayMethod, 2000);
}

function callbackExample() {
    console.log("start example callback");
    function printHello() {
        console.log("Hello");
    }
    delayedResponse(printHello);
}
callbackExample();

//# Promises syntax
//Promise is an object is created by passing in a function that accept two 
// callbacks (success, error)
//This function return a Promise
function promiseExample() : Promise<void> {
    return new Promise<void> (
        (resolve : () => void, reject: () => void) => {
            //Body of promise
            function delayMethod() {
                console.log(`calling resolve`);
                resolve();
            }
            setTimeout(delayMethod, 5000);
        }
    );
}

//# Using Promises
function callPromiseExample() {
    console.log("using callPromiseExample");
    //call anonymouse function inside then method.
    promiseExample().then(
        () =>  console.log(`promiseExample.then()`) 
    )
}
callPromiseExample();

//method catch is used when rejet method is called
function promiseWithError() : Promise<void> {
    return new Promise<void> (
        (resolve : () => void, reject: () => void) => {
            //just reject
            console.log(`calling reject`);
            reject();
        }
    );
}
function callPromiseWithErrorExample() {
    console.log("using callPromiseExample");
    //call anonymouse function inside then method.
    promiseWithError().then(
        () =>  console.log(`all right`) 
    ).catch(
        () => console.log(`something wrong`)
    )
}
callPromiseWithErrorExample();// something wrong

//# Returing values from primises
//Example promise return string
function primiseParamString() : Promise<string> {
    //Define parameter in the generic 
    return new Promise<string>(
        (
            //Define the parameter in resolve method
            resolve: (str: string) => void,
            //Define the parameter in the reject method
            reject: (str: string) => void
        ) => {
            function deleyMethod () {
                //pass value that return the promise
                resolve("test 123");       
            }
            setTimeout( deleyMethod, 2000);
        }
    );
}

function callPromiseParamString() {
    console.log(`callPromiseParamString`);
    primiseParamString().then( (message: string) => {
        console.log(`Promise.then() returned ${message}`);
    });
}
callPromiseParamString();
// for multiple values return, is required use an interface

//# Async and await
async function callPromise() {
    console.log(`before promiseExample`);
    //await only can by used in async method. Await stop programing flow until
    // the method ends
    await promiseExample();
    console.log(`after promiseExample`);
}
callPromise();
//..before promiseExample
//..calling resolve
//..after promiseExample

//# await errors
async function callPromiseError() {
    console.log(`before try catch block`);
    try {
        await promiseWithError();   
    } catch (error) {
        console.log(`error`);
    }
    console.log(`after try catch block`);
}
callPromiseError();
//..before try catch block
//..calling reject
//..error
//..after try catch block

//# await messages
async function callPromiseParamStringSecond() {
    console.log(`before promiseParamString`);
    let result: string = await primiseParamString();
    console.log(`result value ${result}`);            
}
callPromiseParamStringSecond();