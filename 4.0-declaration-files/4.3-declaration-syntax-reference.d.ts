/**
 * How use the declaration syntax to use javascript code in typescript files. 
 * check file '4.3-declaration-syntax-reference.d.ts' to see syntax de declarion.
 * check file '4.3-declaration-syntax-referemce-js.js' to see javascript code implementation
 * check file '4.3-declaration-syntax-reference.ts' to see how use the methods in ts file.
 */

declare function require(name:string);

 // function override
declare function printValue(param: string | number | boolean) : void;
declare function printValue(param: {id: number; name: string}) : void;

 //nested namespaces
declare module NamespaceA {
    module NamespaceB {
        module NamespaceC {
            function sayHey() : void;
        }
    }
}
 
 //classes
 declare class HeyClass {
    sayHey(): void;
}

 //class namespaces
declare module Outer {
    module Inner {
        class HeyClass {
            sayHey(): void;
        }
    }
}

 //class constructor override
declare class ClassWithConstructor {
    constructor(param1: string, param2: boolean);
    constructor();
}
 
 //class properties
declare class ClassWithProperties {
    name: string;
} 

 //static properties and functions
declare class ClassStatic {
    static staticName: string;
    static staticSayHey(): void;
}
 
 //global functions
declare function globalHey();
 
 //function signatures
declare function callbackHey(name: string, cb: () => void);
 
 //optional properties
declare function fnWithOptParam(
    a: number,
    b?: number,
    c?: number
) : number; 

 //function with properties (merging functions and modules)
 declare function fnWithProperty(id: number);
 declare module fnWithProperty {
     var name: string;
 }