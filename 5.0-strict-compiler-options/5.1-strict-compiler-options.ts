/**
 * options are defined in file tsconfig.json
 * */


//## noImplicitAny
//require explicit indication of return type
declare function testImplicitAny() : void;

//cant accept implicit any in paramater
function testNoType(value: string)  {
    console.log(value);
}

//## strictNullChecks
// how c is assigned to d, cant be null
let c : number = 2;
let d = c;
//e can be null
let e : string;
//also can specify undefined type
let f : string | undefined;
let g = f;

//## strictPropertyInitialization
//required defined a constructor to initialize the class variables or be
//inirialized in some other way (undefined type or inline).
class WithoutInit {
    a: number;
    b: number;
    constructor(_a: number) {
        this.a = _a;
        this.b = 0;
    }
}

//## noUnusedLocals and noUnusedParameters
/** throw error if have unused local variables or unused parameters ...*/ 
function add(a: number, b:number) : number {
    //let c: number = 999; /** */... LIKE THIS**/
    return a + b;
}

//## noImplicitReturns
function isLargeNumber(value: number) : 
// error TS7030: Not all code paths return a value.
boolean | undefined {
    if (value > 1_000_000)
        return true;
    //this line can be implicit but now require the return in all the paths
    return undefined
}

//## noFallthroughCasesInSwitch
enum SwithEnum {
    ONE,TWO
}
function testEnumSwith(value: SwithEnum) : string {
    let returnValue = "";
    switch(value) {
        case SwithEnum.ONE:
            returnValue = "One";
            /** if break is not writen throw the error 
             * 'error TS7029: Fallthrough case in switch.' */
            break;
        case SwithEnum.TWO:
            returnValue = "Two";
            break;
    }
    return returnValue;
}

//## strictBindCallApply
class MyBoundClass {
    name: string = "defaultNameValue";

    printName(index: number, description: string) {
        console.log(`this.name: ${this.name}`);
        console.log(`index: ${index}`);
        console.log(`description: ${description}`);
    }
}

let boundclass = new MyBoundClass();
boundclass.printName(1, 'test test');

//same case for method 'call', 'bind', 'apply'
boundclass.printName.call(
    {name: 'override name property value'},
    //'test test2',1
    /** throw error:  
     * `error TS2345: Argument of type '"test test2"' is not assignable 
     *  to parameter of type 'number'.`*/
    //right parameters
     1, 'test test2'

)



console.log("All good");