import "jasmine";

//# Basics

describe('spec/SimpleJasmine.spec.ts', () => { 
    it('should fail', () => { 
        let undefinedValue = "test"; 
        expect(undefinedValue).toBeDefined('should be defined');
    }) 

    /**
     * Matchers (toBe, toContains, toByTruthy, toBeNull, toEqual)
     */

    it("expect value toBe(2)", () => { 
        let twoValue = 2; 
        expect(twoValue).toBe(2); 
    });

    it("expect string toContain value ", () => { 
        let testString = "12345a"; 
        expect(testString).toContain("a"); 
    }); 

    it("expect true to be truthy", () => { 
        let trueValue = true; 
        expect(trueValue).toBeTruthy(); 
    }); 

    it("expect false not to be truthy", () => { 
        let falseValue = false; 
        expect(falseValue).not.toBeTruthy(); 
    }); 

    it("expect value not to be null", () => { 
        let definedValue = 2; 
        expect(definedValue).not.toBeNull(); 
    }); 

    it("expect objects to be equal", () => { 
        let obj1 = {a : 1, b : 2}; 
        let obj2 = {b : 2, a : 1}; 
        expect(obj1).toEqual(obj2); 
    });

});


//# Test start-up and tear-down

describe("beforeEach and afterEach tests", () => { 
    let myString: string | undefined; 
 
    beforeEach(() => { 
        myString = "this is a string"; 
    }); 
    afterEach(() => { 
        expect(myString).toBeUndefined(); 
    }); 
 
    it("should find then clear the myString variable", () => { 
        expect(myString).toEqual("this is a string"); 
        myString = undefined; 
    }); 
 
}); 

// forcing test: execute first and ignore the not forced test  (fdescribe, fit)
/*fdescribe("This is a forced suite", () => { 
    it("This is not a forced test", () => { 
        expect(true).toBeFalsy('true should be false'); 
    }); 
    fit("This is a forced test", () => { 
        expect(false).toBeFalsy(); 
    }) 
});*/ 


//skip test (xdescribe, xit, pending)
describe("skipped test examples", () => { 
    xit("skipped test with no reason", () => { 
        expect(false).toBeTruthy(); 
    }); 
    it("", () => {//this also will be skip becouse the pending function 
        expect(false).toBeTruthy(); 
        pending("this test should be implemented correctly"); 
    }) 
});

//# Data driven test
// using the same test but with different data.

//http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests/
//https://github.com/jphpsf/jasmine-data-provider
//function using(name, values, func) {
//    for (var i = 0, count = values.length; i < count; i++) {
//       if (Object.prototype.toString.call(values[i] !== '[object Array]')) {
//            values[i] = [values[i]]
//       } 
//       func.apply(this, values[i]);
//       /**NEXT LINE: throw currentSpec as undefined ¿¿¿¿????*/
//       //jasmine.getEnv().currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
//    }
//}

/**TYPESCRIPT */
export function using<T> 
    (name: string, values: T[], func: Function) { 
    for (var i = 0, count = values.length; i < count; i++) { 
        func.apply(Object, [values[i]]); 
    } 
}

describe("data driven tests", () => { 
    using("valid values", [ 
        "first string", 
        "second_string", 
        "!!string!!" 
    ], (value: string) => { 
        it(`${value} should contain 'string'`, () => { 
            expect(value).toContain("string"); 
        }); 
    }); 
}); 


//# USing spies
// spying : we temporaly hijacking the function call, and overriding it with a Jasmine spy function.


class MySpiedClass { 
    testFunction(arg1: string) { 
        console.log(arg1); 
    } 
} 
describe("simple spy", () => { 
    it("should spyOn a function call", () => { 
        let classInstance = new MySpiedClass(); 
        let testFunctionSpy  
            = spyOn(classInstance, 'testFunction'); 
 
        classInstance.testFunction("test"); 
         
        expect(testFunctionSpy).toHaveBeenCalled(); 
    }); 
});


//# Spying on callback functions

class CallbackClass { 
    doCallBack(id: number, callback: (result: string) => void ) { 
        let callbackValue = "id:" + id.toString(); 
        callback(callbackValue); 
    } 
} 
 
class DoCallBack { 
    logValue(value: string) { 
        console.log(value); 
    } 
} 

describe("using callback spies", () => { 
    it("should execute callback with the correct string value",  
        () => { 
        let doCallback = new DoCallBack(); 
        let classUnderTest = new CallbackClass(); 
 
        let callbackSpy = spyOn(doCallback, 'logValue'); 
        classUnderTest.doCallBack(1, doCallback.logValue); 
 
        expect(callbackSpy).toHaveBeenCalled(); 
        expect(callbackSpy).toHaveBeenCalledWith("id:1"); 
    }); 
}); 

//# Using spies as fakes (.and.callFake)
// with Jasmine spies you can call a fake function (useful to generate mocks)

class ClassToFake { 
    getValue() : number { 
        return 2; 
    } 
} 
describe("using fakes", () => { 
    it("calls fake instead of real function", () => { 
        let classToFake = new ClassToFake(); 
        spyOn(classToFake, 'getValue').and.callFake ( () => { 
            return 5; 
        }); 
        expect(classToFake.getValue()).toBe(5); 
    }); 
});

//# Asynchronous tests

class MockAsyncClass { 
    executeSlowFunction(success: (value: string) => void) { 
        setTimeout(() => { 
            success("success"); 
        }, 1000); 
    } 
}

//describe("asynchronous tests", () => { 
//    it("failing test", () => { 
// 
//        let mockAsync = new MockAsyncClass(); 
//        let returnedValue!: string; 
//        console.log(`1. calling executeSlowFunction`); 
//        mockAsync.executeSlowFunction((value: string) => { 
//            console.log(`2. executeSlowFunction returned`); 
//            returnedValue = value; 
//        }); 
//        console.log(`3. checking returnedValue`); 
//        expect(returnedValue).toEqual("success"); 
//    }); 
// 
//}); 

// test fail becouse the async call (test ends before the assignation of the value)

//// Fnot ok 15 - asynchronous tests : failing test
////  # Failure: Expected undefined to equal 'success'.
////  # === STACK TRACE ===
////  # Error: Expected undefined to equal 'success'.
////  #     at <Jasmine>
////  #     at UserContext.<anonymous> (/home/gustavopfeifer/lang/typescript-notes/8.0-jasmine/spec/SimpleJasmine.spec.ts:217:31)
////  #     at <Jasmine>
////  # === END STACK TRACE ===


//# Using done()
// next step of the testsuit is not executed until is called the done method.


describe("asynch tests with done", () => { 
    let returnedValue!: string; 
 
    beforeEach((done) => { 
        returnedValue = "no_return_value"; 
        let mockAsync = new MockAsyncClass(); 
        console.log(`1. calling executeSlowFunction`); 
        mockAsync.executeSlowFunction((value: string) => { 
            console.log(`2. executeSlowFunction returned`); 
            returnedValue = value; 
            done(); 
        }); 
    }); 
 
    it("should return success after 1 second", (done) => { 
        console.log(`3. checking returnedValue`); 
        expect(returnedValue).toEqual("success"); 
        done(); 
    }); 
});

//# Using async await
// using Promises to use async await

class MockAsyncWithPromiseClass { 
    delayedPromise(): Promise<string> { 
        return new Promise<string> 
            ((resolve: (str: string) => void, 
                reject: (str: string) => void 
            ) => { 
                function afterTimeout() { 
                    console.log(`2. resolving promise`); 
                    resolve('success'); 
                } 
                setTimeout(afterTimeout, 1000); 
            }); 
    } 
} 


describe("async test with async keyword", () => { 
    it("should wait for async to return with value ", async () => { 
        let mockAsyncWithPromise = new MockAsyncWithPromiseClass(); 
        let returnedValue!: string; 
        console.log(`1. calling delayedPromise`); 
        returnedValue = await mockAsyncWithPromise.delayedPromise(); 
        console.log(`3. checking returnedValue`); 
        expect(returnedValue).toEqual("success"); 
    }); 
}); 

//# HTML-based tests
//
// * require adicional dependencies. 
// * see SpecRunner.html
// * require transpile ts file into html_spec/HtmlTest.spec.js
//      * now arent traspiled is write the test directly
// * notes continue in html_spec/HtmlTest.spec.js

