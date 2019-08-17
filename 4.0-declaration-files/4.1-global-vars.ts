/**
 * # Declarative Files
 *  
 * * Provide TS compatibility with external libraries.
 * * Is a special type of file used by TS compiler.
 * * Use a '.d.ts' extension.
 * * Are like headers in c++, describe syntax and structure of available functions  
 *     and properties (not implementation).
 * 
 *  run example:
 *  * generate js output
 *  `tsc 4.1-global-vars.ts --out ../dist/4.1-global-vars.js` 
 *  * open html '4.1-global-vars.html'
 *  
*/

// use  '/// <reference path="...">' to indicate the declared variables
/// <reference path="4.1-global-vars.d.ts" />

class GlobalPrinter {
    static printToConsole() {
        //ADDRESS_LIST is implemented in the html file and declared in the
        // .d.ts file using 'declare' keyword.
        //declare keyword tells the TS compiler that we want define the type of 
        // something , but the implementation will be resolved at runtime
        for (let address  of ADDRESS_LIST) {
            console.log(`address: ${address}`);
        }
    }
}

window.onload = () => {
    GlobalPrinter.printToConsole();
}