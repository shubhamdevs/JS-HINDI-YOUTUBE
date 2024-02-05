class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{ // this extends keywords give all details of it's asked class
    constructor(username, email, password){
        super(username) // this super keyword brings it's asked call and it's value
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.addCourse()

const masalaChai = new User("Shubham")

masalaChai.logMe()

console.log(chai instanceof User)