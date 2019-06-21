
// Decoratos allow us inject code into the actual definition of a class, 
//  property, function or method parameter.

// to use decorators in tsconfig.json, set experimentalDecorators to true

//Class decorators have a single parameter (the class prototype)
function simpleDecorator(consturctor: Function) {
    console.log('simpleDecorator called');
}

function secondDecorator(consturctor: Function) {
    console.log('secondDecorator called');
}

@simpleDecorator
@secondDecorator
class ClassWithDecorators {

}

let firstInstance = new ClassWithDecorators();
let secondInstance = new ClassWithDecorators();

//output:
//secondDecorator called
//simpleDecorator called
//decorators are called when the class is defined not when the object is instanced
// are called in reverse order


//to pasing parameter we use decorator factory


function decoratorWithParameter(name: string) {
    return function( consturctor: Function) {
        console.log(`decorator function called: ${name}`)
    }
}

@decoratorWithParameter("testParameter")
class classDecoratorWithParameter {
}
//OUTPUT: decorator function called: testParameter


//class decorator parameters (add property to instance using decorator)
function decoratorTestParameter(constructor: Function) {
    constructor.prototype.testProperty = 'testProperty';
}

@decoratorTestParameter
class Foo {
}
let foo = new Foo();
console.log(`foo test parameter:  ${(<any>foo).testProperty}`);
//OUTPUT:  foo test parameter:  testProperty


//property decorators
//property decorator have two parameters (the class prototype and the property name)
function propertyDesc(target: any, propertyKey: string) {
    console.log(`target: ${target}`);
    console.log(`target.constructor: ${target.constructor}`);
    if (typeof(target) === 'function') {
        //with static attributes 'target.constructor.name' return 'Function'
       console.log(`class name: ${target.name}`);
    } else {
        console.log(`class name: ${target.constructor.name}`);
    }
    console.log(`propertyKey : ${propertyKey}`);
}
class ClassWithPropertyDesc {
    @propertyDesc
    attribute: string;
}
//OUTPUT: 
//
//target: [object Object]
//target.constructor: function ClassWithPropertyDesc() {
//    }
//class name: ClassWithPropertyDesc
//propertyKey : attribute

//static property decorators
class StaticClasswithPropertyDesc {
    @propertyDesc
    static attribute: string;
}
//OUTPUT
//
//target: function StaticClasswithPropertyDesc() {
//}
//target.constructor: function Function() { [native code] }
//class name: StaticClasswithPropertyDesc
//propertyKey : attribute

//method decorators 
//method decprators have three parameters (the class prototype, the method name and 
//the method descriptor (optional))
function mDecorator (
    target:any,
    methodName: string,
    descriptor?: PropertyDescriptor)
{
    console.log(`target: ${target}`);
    console.log(`methodName: ${methodName}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}

class Foo2 {
    @mDecorator
    print(output: string) {
        console.log(`Foo2.print (${output}) called.`);
    }
}
//OUTPUT
//
//target: [object Object]
//methodName: print
//target[methodName] : function (output) {
//        console.log("Foo2.print (" + output + ") called.");
//}

//parameter decorators
function pDecorator(
    target: any,
    methodName: string,
    parameterIndex: number)
{
    console.log(`target: ${target}`);
    console.log(`methodName: ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);
}

class Foo3 {
    print(@pDecorator value: string) {

    }
}
//OUTPUT
//
//target: [object Object]
//methodName: print
//parameterIndex : 0



