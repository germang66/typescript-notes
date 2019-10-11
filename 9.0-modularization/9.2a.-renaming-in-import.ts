/** Module renaming in import */


/** Export stuff */
export class Module1 { 
    print() { 
        print(`Module1.print()`); 
    } 
} 
 
function print(functionName: string) { 
    console.log(`print() called with ${functionName}`); 
} 
