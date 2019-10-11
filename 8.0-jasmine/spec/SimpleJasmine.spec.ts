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
    let myString; 
 
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
function using(name, values, func) {
    for (var i = 0, count = values.length; i < count; i++) {
       if (Object.prototype.toString.call(values[i] !== '[object Array]')) {
            values[i] = [values[i]]
       } 
       func.apply(this, values[i]);
       /**NEXT LINE: throw currentSpec as undefined ¿¿¿¿????*/
       //jasmine.getEnv().currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
    }
}

/**TYPESCRIPT */
//export function using<T> 
//    (name: string, values: T[], func: Function) { 
//    for (var i = 0, count = values.length; i < count; i++) { 
//        func.apply(Object, [values[i]]); 
//    } 
//}

describe("data driven tests", () => { 
    using("valid values", [ 
        "first string", 
        "second_string", 
        "!!string!!" 
    ], (value) => { 
        it(`${value} should contain 'string'`, () => { 
            expect(value).toContain("string"); 
        }); 
    }); 
}); 


//# USing spies

