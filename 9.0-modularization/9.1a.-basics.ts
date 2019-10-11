/*************************************************
 *
 * ## Separation of Concerns
 *
 * * The basic principle of Separation of Concerns is 
 *    that we should program against a defined interface
 * * the code that is implementing this interface can be refactored, improved,
 *    enhanced, or even completely replaced without the rest of the program being affected. 
 * * module loading syntax libraries: These two syntax styles were known as 
 *    CommonJS (used in Node), and AMD, or Asynchronous Module Definition (used in Require).
 *    Fortunately, TypeScript has always supported both CommonJS and AMD module syntax. 
 * 
 ************************************************/

/** Export stuff */
export class Module1 { 
    print() { 
        print(`Module1.print()`); 
    } 
} 
 
function print(functionName: string) { 
    console.log(`print() called with ${functionName}`); 
} 
