/**
 * How use the declaration syntax to use javascript code in typescript files. 
 * check file '4.3-declaration-syntax-reference.d.ts' to see syntax de declarion.
 * check file '4.3-declaration-syntax-referemce-js.js' to see javascript code implementation
 * check file '4.3-declaration-syntax-reference.ts' to see how use the methods in ts file.
 */

//function with multiple parameter types
function printValue(param) {
    if (typeof param === "string") {
        console.log("is string: " + param);
    }
    if (typeof param === "boolean") {
        console.log("is boolean: " + param);
    }
    if (typeof param === "number") {
        console.log("is number: " + param);
    }
    if (typeof param === "object") {
        console.log("is object: " + JSON.stringify(param))
    }
}

//nested namespaces
var NamespaceA = {
        NamespaceB : {
            NamespaceC : {
                sayHey: function() {
                    console.log("Hey! from namespace");
                }
        }
    }
}

//class
function HeyClass() {
    return {
        sayHey: function() {
            console.log("hey! from Hey Class");
        }
    }
}

//class namespaces
var Outer = {
    Inner : {
        HeyClass: function() {
            return {
                sayHey: function() {
                    console.log("Hey! from class namespaces");
                }
            }
        }
    }
}

//class constructor overloads
function ClassWithConstructor(param1, param2) {
    console.log("start constuctor of ClassWithConsturctor");
    if (typeof param1 === "string") {
        console.log("is string: " + param1);
    }
    if (typeof param2 === "boolean") {
        console.log("is boolean: " + param2);
    }
    console.log("end constuctor of ClassWithConsturctor");
}

//class with properties
function ClassWithProperties() {
    return {
        name: null
    }
}

//static propeties and functions
function ClassStatic() {
}
ClassStatic.staticName = null,
ClassStatic.staticSayHey = function () {
    console.log("Hey from staticSayHey");
}

 //global functions
function globalHey() {
    console.log("Hey from global function");
}
 
 //function signatures
 function callbackHey(prefix, cb) {
    console.log(prefix);
    cb();
 }

 //optional properties
function fnWithOptParam(a,b,c) {
    if (typeof a !== "undefined" && typeof b !== "undefined" && typeof c !== "undefined") {
        return a + b + c;        
    } 
    else if (typeof a !== "undefined" && typeof b !== "undefined")
    {
        return a + b;
    }  
    else if (typeof a !== "undefined") 
    {
        return a;
    }
}
 
 //function with properties (Marging functions and module)
 function fnWithProperty(value) {
     console.log(value);
 }

