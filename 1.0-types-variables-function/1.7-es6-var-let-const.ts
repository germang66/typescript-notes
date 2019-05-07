
// (var) use anywhere while defined
console.log(one);
var one = "one";    //# one

// (var) all scope
if (one === "one") {
    var two = "two";
}
console.log(two);   //# two


// (let) use after be defined
console.log(one1); //THROW ERROR:   Block-scoped variable 'one1' used before its declaration.
let one1 = "one";

// (var) exist only in the scope
if (one1 === "one") {
    let two1 = "two";
}
console.log(two1);  //THROW ERROR: Cannot find name 'two1'. Did you mean 'two'?



const myconst = 1;
myconst = 2; //THROW ERROR:  Cannot assign to 'myconst' because it is a constant.