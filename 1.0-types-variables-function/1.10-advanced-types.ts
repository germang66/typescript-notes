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

//using tuples and rest in a function definition
function foo4( ...args: [number, string, boolean]) {
    let [arg1, arg2, arg3] = args;
    console.log(`arg1 ${arg1}`); 
    console.log(`arg2 ${arg2}`); 
    console.log(`arg3 ${arg2}`); 
}
foo4(1, "hello", false);

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





