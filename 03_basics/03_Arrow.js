const user = {
    username: "shubham",
    price: 999,

    welcomeMessage: function() {
        //--> this keyword helps in getting current context
        // console.log(`${this.username}, welcome to website`) 
        // console.log(this)
    }
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// function chai() {
//     let username = "shubham"
//     console.log(this)
// }


// --> const/let <function_name> => { code }
const chai = () => {
    let username = "Shubham"
    console.log(this)
} 

// --> const/let <function_name> = (parameters) => {code}
const addTwo = (num1, num2) => {
    return num1 + num2
}

// --> Implecit Return, where the function automatically returns
const addThree = (num1, num2) => num1 + num2

// if we enclose in {} -> we have to return
// but if we enclose in () parenthesis -> we need not have to use return keyword

// for retuning object we have to use the ()

// const addThree = (num1, num2) => ({username: "Shubham"})


// console.log(addTwo(3,4))



