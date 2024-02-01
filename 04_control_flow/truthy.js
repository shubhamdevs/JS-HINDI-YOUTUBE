const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function(){}

// Checking if an array is empty
if (userEmail.length === 0) {
    console.log("Array is empty")
}

// Checking if an object is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operatior (??): null undefined

let val1; // we are taking a variable
// val1 = 5 ?? 10 // Here the val1 value will be 5, because we are getting the value of 5
// console.log(val1) // -> It will return 5

// But if 
// val1 = null ?? 10 // Here the val1 value will be 10
// console.log(val1) // -> It will print the value 10

// It is very helpful when we get/fetch details from database

// val1 = undefined ?? 15 //-> It will print the value 15

// val1 = null ?? 10 ?? 20 // -> Here what ever value we get first it will print the value

// Terniary Operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")







