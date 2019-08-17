//# Promises
//Are techniques for standardizing async processing like callbacks.
//With callbacks code can become rather complex and repetitive.
function delayedResponse(callback: Function) {
    function delayMethod(){
        callback();
        console.log("finish example callback");
    }
    //simulate delay process
    setTimeout(delayMethod, 2000);
}

function callbackExample() {
    console.log("start example callback");
    function printHello() {
        console.log("Hello");
    }
    delayedResponse(printHello);
}
callbackExample();

//# Promises syntax
//Promise is an object is created by passing in a function that accept two 
// callbacks (success, error)
//This function return a Promise
function promiseExample() : Promise<void> {
    return new Promise<void> (
        (resolve : () => void, reject: () => void) => {
            //Body of promise
            function delayMethod() {
                console.log(`calling resolve`);
                resolve();
            }
            setTimeout(delayMethod, 5000);
        }
    );
}

//# Using Promises
function callPromiseExample() {
    console.log("using callPromiseExample");
    //call anonymouse function inside then method.
    promiseExample().then(
        () =>  console.log(`promiseExample.then()`) 
    )
}
callPromiseExample();

//method catch is used when rejet method is called
function promiseWithError() : Promise<void> {
    return new Promise<void> (
        (resolve : () => void, reject: () => void) => {
            //just reject
            console.log(`calling reject`);
            reject();
        }
    );
}
function callPromiseWithErrorExample() {
    console.log("using callPromiseExample");
    //call anonymouse function inside then method.
    promiseWithError().then(
        () =>  console.log(`all right`) 
    ).catch(
        () => console.log(`something wrong`)
    )
}
callPromiseWithErrorExample();// something wrong

//# Returing values from primises
//Example promise return string
function primiseParamString() : Promise<string> {
    //Define parameter in the generic 
    return new Promise<string>(
        (
            //Define the parameter in resolve method
            resolve: (str: string) => void,
            //Define the parameter in the reject method
            reject: (str: string) => void
        ) => {
            function deleyMethod () {
                //pass value that return the promise
                resolve("test 123");       
            }
            setTimeout( deleyMethod, 2000);
        }
    );
}

function callPromiseParamString() {
    console.log(`callPromiseParamString`);
    primiseParamString().then( (message: string) => {
        console.log(`Promise.then() returned ${message}`);
    });
}
callPromiseParamString();
// for multiple values return, is required use an interface

//# Async and await
async function callPromise() {
    console.log(`before promiseExample`);
    //await only can by used in async method. Await stop programing flow until
    // the method ends
    await promiseExample();
    console.log(`after promiseExample`);
}
callPromise();
//..before promiseExample
//..calling resolve
//..after promiseExample

//# await errors
async function callPromiseError() {
    console.log(`before try catch block`);
    try {
        await promiseWithError();   
    } catch (error) {
        console.log(`error`);
    }
    console.log(`after try catch block`);
}
callPromiseError();
//..before try catch block
//..calling reject
//..error
//..after try catch block

//# await messages
async function callPromiseParamStringSecond() {
    console.log(`before promiseParamString`);
    let result: string = await primiseParamString();
    console.log(`result value ${result}`);            
}
callPromiseParamStringSecond();