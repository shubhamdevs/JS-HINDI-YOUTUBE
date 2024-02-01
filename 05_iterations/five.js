// For Each
const coding = ["js", "ruby", "java", "python", "cpp"]

// <array_name>.forEach(function (<function_parameter>) { code})
// here we don't give name to the function
// forEach method takes a callback function
// coding.forEach(function (item) {
//     console.log(val);
// })

// callback using arrow arrow function
coding.forEach((item) => {})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // here we are referencing to the function not calling it

coding.forEach((item, index, arr) => { // forEach method has these 3 parameters, here arr gives the whole arr
    console.log(item, index, arr)
})

// Here we have written 3 object in an array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName); // Here we are getting access to the languageName of enclosed object array
})