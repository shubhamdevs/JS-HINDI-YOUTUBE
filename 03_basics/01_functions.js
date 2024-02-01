function addTwoNumbers(number1, number2) {
    return number1 + number2
}


function loginUserMessage(username) {
    return `${username} just logged in`
}

// --> by using ...<num1>(rest operator) we can take any number of input as parameter, it is same as spread parameter but it's calling is different based on use case
function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500)) --> It will return an array [200, 400, 500]

const user = {
    username: "shubham",
    price: 199
}

// --> Here we are taking a object as parameter and we can get all the keys of that object by dot notaion
function handleObject(anyobject) {
    return (`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user) --> Here we are passing a object to the function

const mynewArray = [200, 400, 100, 600]

function returnSecondVAlue(getArray) {
    return getArray[1]
}

console.log(returnSecondVAlue(mynewArray))

