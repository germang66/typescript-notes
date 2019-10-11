
/** Module renaming in export*/

/** Export stuff */
export class Module1 { 
    print() { 
        print(`Module1.print()`); 
    } 
} 
 
function print(functionName: string) { 
    console.log(`print() called with ${functionName}`); 
} 

export {Module1 as NewModule}; 