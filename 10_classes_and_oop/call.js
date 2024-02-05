function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username) // here the call() method actually calls the SetUsername() function, it takes optional this parameter
    // which means the function(setUsername) is giving context to the current function(createUser)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai)