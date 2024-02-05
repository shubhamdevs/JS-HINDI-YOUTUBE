class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // if we want to use some customization or don't want to send a value we use getter(get) and setter(set)
    // we have to call both

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value // in setter we don't have to return , it return by default
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "123")
console.log(hitesh.password)

const chai = new User("chai@chai.com", "chai")

console.log(chai.email)