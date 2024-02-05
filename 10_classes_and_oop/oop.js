const user = {
    username: "shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        console.log(this); // here this is current context that means the object
    }
}



// console.log(user.username)
// console.log(user.getUserDetails())

// const promiseOne = new Promise()
// const date = new Date() 
// the new keyword here is a constructor function which helps in creating instances form base instance

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }


    return this // even though if we don't return this it will implecity return this, but it's a good practice to return this
}

const userOne = new User("shubham", 12, true) // if we don't use new keyword, the instance will override the previous/after instance
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor) 
// it gives a function -> [Function: User], It's a reference about the user
// console.log(userTwo)
 
// new keyword creates a empty object which is called instance then constructor function call happens for the new keyword
// it arranges all arguments and returns it. and in the third step this keyword injects values to the instance and in the four stage we get the function

