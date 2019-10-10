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


// Test start-up and tear-down
//...











