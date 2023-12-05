function addTwoNumbers(number1, number2) {
    return number1 + number2
}

function loginUserMessage(username) {
    return `${username} just logged in`
}


function calculateCartPrice(...num1) {
    return num1
}

const user = {
    username: "shubham",
    price: 199
}

function handleObject(anyobject) {
    return (`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

const mynewArray = [200, 400, 100, 600]

function returnSecondVAlue(getArray) {
    return getArray[1]
}

console.log(returnSecondVAlue(mynewArray))

