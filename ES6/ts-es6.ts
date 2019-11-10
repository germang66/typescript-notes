/** ##############
 *  ## Template String
 ##################*/

var a = 10;
var b = 10;

console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);

//=> JavaScript first appeared 20 years ago. Crazy!

console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and not ${10 * (a + b)}.`);

/** ##############
 *  ## for-in , for-of
 ##################*/

let numbers : number[] = [1,2,3,4,5];

for(let key in numbers) {
    console.log(numbers[key]);
}
//for..of is from es6
for(let value of numbers) {
    console.log(value);
}


/** ##############
 *  ##  var let const
 ##################*/

 
// (var) use anywhere while defined
console.log(one);
var one = "one";    //# one

// (var) all scope
if (one === "one") {
    var two = "two";
}
console.log(two);   //# two


// (let) use after be defined
//console.log(one1); //THROW ERROR:   Block-scoped variable 'one1' used before its declaration.
let one1 = "one";

// (var) exist only in the scope
if (one1 === "one") {
    let two1 = "two";
}
//console.log(two1);  //THROW ERROR: Cannot find name 'two1'. Did you mean 'two'?



const myconst = 1;
//myconst = 2; //THROW ERROR:  Cannot assign to 'myconst' because it is a constant.

