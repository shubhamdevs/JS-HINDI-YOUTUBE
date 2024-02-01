// Immediately Invoked Function Expressions (IIFE)
// This function executes immediately

// (function call){code})();

// name IIFE
(function chai() {
    console.log(`DB CONNECTED`)
})();
// Here we have to give the ; --> this will denote that the function ends here otherwise it may continue go on and give error


// simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("shubham")

// Here we are giving it a parameter "shubham" and we are writing this in last () parenthesis




// LIFO - Last in First Out




