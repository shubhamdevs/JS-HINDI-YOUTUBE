// For of loop
// array with items --> ["", "", ""] or [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]


// for (const <item>(we can give any name) of <object in a broder terms(object, dict, array, strings)> ) {code}
for (const val of arr) {
    console.log(val)
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
// Maps holds unique values in order

const map = new Map()
map.set("IN", "India") // (key, value) pair
map.set("USA", "United States of America")
map.set("FR", "France")

// console.log(map)

for (const key of map) {
    console.log(key) // It will return key-value pair as a array to prevent this we use a different syntax
    
}

for (const [key, value] of map) { // We enclose the key, value pair in square
    consoloe.log(key,":-", value)
}
// Now it will print it as it is

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value)
// }

// The above syntax for forof loop in object will not work

