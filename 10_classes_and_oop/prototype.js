let myName = "shubham    "

// console.log(myname.truelength)

let myHeros = ["thor", "spiderman"]

let hearoPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shubham = function(){
    console.log(`Shubham is present in all objects`);
}

Array.prototype.heyShubham = function(){
    console.log(`Shubham say hello`)
}
// hearoPower.shubham()
myHeros.shubham()
myHeros.heyShubham()
// hearoPower.heyShubham()

// inheritance

const User = {
    name: "Shubham",
    email: "shubham@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(Teacher, TeachingSupport)

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()