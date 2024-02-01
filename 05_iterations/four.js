const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}


// For objects we have use for in loop
for (const key in myObject) {
//    console.log(key); // -> this will print all the keys
    // console.log(myObject[key]) // -> this will print all the values of the keys
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);    // It will give all the keys(0, 1, 2, 3, 4) of the array, yes array has keys also and it starts from 0(zero)
}

// we can't use for in loop in maps because maps are not itterable but we can make them itterable. 


