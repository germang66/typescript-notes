/**
 * How use the declaration syntax to use javascript code in typescript files. 
 * check file '4.3-declaration-syntax-reference.d.ts' to see syntax de declarion.
 * check file '4.3-declaration-syntax-referemce-js.js' to see javascript code implementation
 * check file '4.3-declaration-syntax-reference.ts' to see how use the methods in ts file.
 */

// typescript definitions
/// <reference path="4.3-declaration-syntax-reference.d.ts" />

//include js with implementations 
var fs = require('fs');
eval(fs.readFileSync('4.3-declaration-syntax-reference-js.js') + '')


// function override
printValue("hello world");
printValue(false);
printValue(2);
printValue({ id: 3, name: "yes" });

//nested namespaces
NamespaceA.NamespaceB.NamespaceC.sayHey();

//classes
let heyClass = new HeyClass();
heyClass.sayHey();

//class namespace
let heyClass2 = new Outer.Inner.HeyClass();
heyClass2.sayHey();

//class constructor override
let eclass1 = new ClassWithConstructor("myStr", false);
let eClass2 = new ClassWithConstructor();

//class properties
let eClass3 = new ClassWithProperties();
eClass3.name = "name_of_eclass3";
console.log(eClass3.name);

//static properties and functions
ClassStatic.staticName = "name_of_classStatic";
console.log(ClassStatic.staticName);
ClassStatic.staticSayHey();

//global functions
globalHey();

//function signatures
callbackHey("callback", globalHey);

//optional properties
let result = fnWithOptParam(5,6,7);
console.log(result);
result = fnWithOptParam(5,6);
console.log(result);
result = fnWithOptParam(5);
console.log(result);

//function with properties (marging functions and module)
fnWithProperty(1);
fnWithProperty.name = "name"
console.log(fnWithProperty.name);
