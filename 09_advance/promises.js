// ========================== PROMISES IN JAVASCRIPT ==========================



// ========================== WHAT IS A PROMISE? ==========================

/**
 * Promise:
 *
 * -> Represents future completion/failure of async task
 *
 * States of Promise:
 *
 * 1. Pending
 * 2. Fulfilled (resolved)
 * 3. Rejected
 *
 *
 * Used for:
 * -> API calls
 * -> Database operations
 * -> File handling
 * -> Network requests
 * -> Cryptography
 */



// ========================== CREATING FIRST PROMISE ==========================

const promiseOne = new Promise(function(resolve, reject){


    /**
     * Simulating async task
     */

    setTimeout(function(){

        console.log('Async task is complete');


        // Promise resolved
        resolve();

    }, 1000);
});



// ========================== CONSUMING PROMISE ==========================

/**
 * then()
 *
 * Executes when promise resolves
 */

promiseOne.then(function(){

    console.log("promise consumed");
});



/**
 * Output after 1 second:
 *
 * Async task is complete
 * promise consumed
 */



// ========================== PROMISE WITHOUT VARIABLE ==========================

new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log("Async task 2");

        resolve();

    }, 1000);

}).then(function(){

    console.log("Async 2 resolved");
});



/**
 * Output:
 *
 * Async task 2
 * Async 2 resolved
 */



// ========================== PROMISE RETURNING DATA ==========================

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){

        
        // Sending object data
        resolve({

            username: "Tripti",

            email: "tripti@gmail.com"
        });

    }, 1000);
});



// Receiving resolved data
promiseThree.then(function(user){

    console.log(user);
});



/**
 * Output:
 *
 * {
 *   username: "Tripti",
 *   email: "tripti@gmail.com"
 * }
 */



// ========================== PROMISE WITH ERROR HANDLING ==========================

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){

        let error = true;


        // If no error
        if(!error){

            resolve({

                username: "Tripti",

                password: "1213434"
            });

        }else{


            // Reject promise
            reject('Error: something went wrong');
        }

    }, 1000);
});



// ========================== PROMISE CHAINING ==========================

promiseFour

.then((user) => {


    console.log(user);


    // Pass username to next then()
    return user.username;

})

.then((username) => {

    console.log(username);

})

.catch(function(error){


    /**
     * catch()
     *
     * Handles rejected promises
     */

    console.log(error);

})

.finally(() =>


    /**
     * finally()
     *
     * Runs always:
     * -> resolved
     * -> rejected
     */

    console.log("The promise is either resolved or rejected")
);



/**
 * Current Output:
 *
 * Error: something went wrong
 * The promise is either resolved or rejected
 */



// ========================== ASYNC / AWAIT ==========================

const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){

        let error = true;


        if(!error){

            resolve({

                username: "JavaScript",

                password: "1213434"
            });

        }else{

            reject('Error: JS went wrong');
        }

    }, 1000);
});



// ========================== ASYNC FUNCTION ==========================

/**
 * async
 *
 * Makes function asynchronous
 */

async function consumePromiseFive(){


    /**
     * try-catch used for error handling
     */

    try {


        /**
         * await
         *
         * Waits for promise completion
         */

        const response = await promiseFive;

        console.log(response);

    } catch (error) {

        console.log(error);
    }
}



// Function call
consumePromiseFive();



/**
 * Output:
 *
 * Error: JS went wrong
 */



// ========================== FETCH API WITH ASYNC/AWAIT ==========================

/**
 * fetch()
 *
 * Used for network/API requests
 */


// async function getAllUsers(){

//     try {


//         // Fetch data from GitHub API
//         const response = await fetch(
//             'https://api.github.com/users/triptijha1'
//         );


//         // Convert response into JSON
//         const data = await response.json();


//         console.log(data);

//     } catch (error) {

//         console.log("E: ", error);
//     }
// }



// getAllUsers();



// ========================== FETCH API USING .then() ==========================

fetch('https://api.github.com/users/triptijha1')

.then((response) => {


    /**
     * response.json()
     *
     * Converts JSON response into object
     */

    return response.json();
})

.then((data) => {

    console.log(data);

})

.catch((error) => console.log(error));



/**
 * Output:
 *
 * GitHub user object data
 */



// ========================== PROMISE METHODS ==========================

/**
 * then()
 * -> Runs after resolve
 *
 *
 * catch()
 * -> Handles errors
 *
 *
 * finally()
 * -> Executes always
 */



// ========================== PROMISE STATES ==========================

/**
 * Pending
 * -> Initial state
 *
 *
 * Fulfilled
 * -> Promise resolved
 *
 *
 * Rejected
 * -> Promise failed
 */



// ========================== ASYNC vs THEN/CATCH ==========================

/**
 * then/catch
 * -> Promise chaining
 *
 *
 * async/await
 * -> Cleaner syntax
 * -> Easier to read
 */



// ========================== IMPORTANT JAVASCRIPT CONCEPTS ==========================

/**
 * Promise
 * -> Handles asynchronous operations
 *
 *
 * Callback Queue
 * -> Async tasks wait before execution
 *
 *
 * Event Loop
 * -> Manages async execution
 *
 *
 * Fetch API
 * -> Perform HTTP requests
 *
 *
 * JSON
 * -> Data exchange format
 */



// ========================== PROMISE.ALL ==========================

/**
 * Promise.all()
 *
 * -> Runs multiple promises together
 * -> Returns all results if all succeed
 * -> Fails if one promise rejects
 */


/*
Example:

Promise.all([promise1, promise2, promise3])
.then((results) => {

    console.log(results);

})
.catch((error) => {

    console.log(error);
});
*/