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


/**
 * tuples 
*/


/**
 * Bigint
*/