/// <reference path="4.2-declaration-file.d.ts" />

/*
*  run example:
*  * generate js output
*  `tsc 4.2-declaration-file.ts --out ../dist/4.2-declaration-file.js` 
*  * open html '4.1-global-vars.html'
*  
*/


window.onload = () => { 
    var failureMessageEx1: IResponse = { 
        responseText : { 
            "failure" : true, 
            "errorMessage" : "Error Message from Typescript1" 
        } 
    }    
    
    var failureMessageEx2: IResponse = { 
        responseText : { 
            "failure" : "true", 
            "errorMessage" : "Error Message from Typescript2" 
        } 
    }  

    var failureMessages: IResponse[] = [
        failureMessageEx1, failureMessageEx2
    ]

    for (let failureMessage of failureMessages) {
        if (ErrorHelper.containsErrors(failureMessage)) 
            ErrorHelper.trace(failureMessage); 
    }

} 