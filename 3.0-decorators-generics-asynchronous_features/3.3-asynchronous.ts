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
                resolve();
            }
            setTimeout(delayMethod, 2000);
        }
    );
}


//# Using Promises

//# Callback versus promises syntax

//# Returing values from primises

//# Async and await

//# await errors

//# Promise versus await syntax

//# await messages