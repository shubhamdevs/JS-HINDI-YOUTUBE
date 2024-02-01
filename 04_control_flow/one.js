 // if Statement

//  if (condition) {

//  }

//  const isUserloggedIn = true

//  if (isUserloggedIn) {

//  }

 // === (Triple Equals checks the type also)

//  if ( 2 == "2") {
//     console.log("executed")
//  }

 // Shorthand notation
// const balance = 1000
//  if (balance > 500) {
//     // code
//  }
// We dont use this in short hand scope notation, we use:
// if (balance > 500) console.log("test"); 
// this is called implecite scope, ; is most important

// if (balance < 500) {
//     console.log("less than")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 750")
// } else {
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// And condition
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in")
}



