// let a = 10
// const b = 20
// var c = 30 --> never use var


// function one() {
//     const username = "Shubham"

//     function two() {
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website) --> We can not execute this website out of function scope

//     two()
// }

// one()

if (true) {
    const username = "shubham"
    if (username === "shubham") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// --> This is function declearation
function addone(num) {
    return num + 1
}

addone(5)


// --> This is a function expression
// --> We can only use this function after the expression
const addTwo = function(num) {
    return num + 2
}

addTwo(5)
