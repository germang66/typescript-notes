
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

