// --> This is also a valid syntax for declearing Objects
// --> This is called singleton objects, both object declearation works same


const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Shubham"

tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
           firstname: "Shubham",
           lastname: "Biswas"  
        }
    }
}

// ##Here the ? checks if the value is present or not, it will help in while fecting data, we will talk about later.
// console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}

// --> The assign method will add two object and return a new object
// const obj3 = Object.assign({}, obj1, obj2)

// --> Here if we add {} in assign method it ensures all values are going in a new object, It's a good way of writing code


// --> Here we are using spread method(...<obj_name>), this will spread all the objects and combine in a new object
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const users = [
    {
        id: 1,
        email: "Shubham@gmail.com"
    },
    {

    }
]

// --> While accessing data from database we use this syntax, the users array above giving buch of objects
users[1].email

// --> Here keys method returns all the objects keys in an array
// console.log(Object.keys(tinderUser))

// --> It returns all the values of a object in an array
// console.log(Object.values(tinderUser))

// --> It returns all the key-value pair in an array and reurns a combined array
// console.log(Object.entries(tinderUser))

// --> hasOwnProperty method checks if a value is present on a object and it takes the asking value as parameter
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// --> It returns a boolean value



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shubham"
}

// --> It is a valid syntax to get the value of courseInstructor but we will use a better syntax if we need to get the value again and again
// course.courseInstructor

// Here const {<name of the key for which we will get value> : <custom_name>(this is optional)} = <object_name>
const {courseInstructor: instructor} = course

// Now we can get the courseInstructor value with custom name
console.log(instructor)






