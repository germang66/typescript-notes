//interfaces to describe the structure of the response object that the
// errorHelper closure relies upon.
interface IResponse { 
    responseText: IFailureMessage; 
} 
interface IFailureMessage { 
    failure: boolean | string; 
    errorMessage: string; 
} 

//Is declare the definition of ErrorHelper methods.
// the use of 'module' keyword, his name must match the closure name from the
// original Javascript that we are describing.
declare module ErrorHelper { 
    function containsErrors(response: IResponse) : boolean; 
    function trace(message: IResponse) : void; 
}  