const user = {
    username: "shubham",
    price: 999,

    welcomeMessage: function() {
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

const chai = () => {
    let username = "Shubham"
    console.log(this)
} 

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3,4))



