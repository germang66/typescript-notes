

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


