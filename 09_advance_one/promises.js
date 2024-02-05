// Promise takes a callback and two parameter
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // to connect then and resolve we have to call the resolve method 
    }, 1000)
})

// Now we need to consume the promise 
// .then() gives a function callback, it takes an automatic arguments
promiseOne.then( function(){
    console.log("Promise consumed")
})

// .then() method is connected with resolve parameter of Promise method's callback function

new Promise(function(resolve, reject){
    setTimeout( function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 reloved")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        // resolve gives values to the then method (basically it connects with then method) and usually it returns an object
        resolve({username: "Chai", email: "sample@sample.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user) // What ever resolve passes we get here
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "hitesh", password: "123"})
        } else {
            // it is not mandatory but usually we give it
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


// Now how to consume this promise

// we know that we get value by using then and we get error by using catch. In both cases we have to use function
promiseFour.then((user) => {
    console.log(user)
    return user.username // now the question is where this value is going? Here comes the chaining, it goes to the next then block

}).then((username) => {
    console.log(username) // now here we get the username
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))

// this finally() method tells us if the work is eventually done or not and it works by default
// it also tells us the promise is working

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Shubham", password: 1234})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})


// async-await it works same as .then() method but one likely thing about this is that it wait till the function execute, if the 
// function is's executed it will not go farther
async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response)
    // here async function waiting for promiseFive variable to give something by await keyword and we are storing that value in
    // response variable
    // one downside of using this is that, it can't handel error, so we need to wrrap under try-catch block
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))