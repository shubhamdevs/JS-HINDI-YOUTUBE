const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach((item) => {
//     console.log(item)
//     return item // it will not return anything, it will be undefined.  
// });

// console.log(values) // it will print undefined

// forEach loop can't return anything. that's why we use map 


// filter method
const myNums = [1, 2, 3, 4 , 5 , 6 , 7, 8, 9, 10]


// filter method takes a callback function and it returns value if the condition is satisfied
// const newNUms = myNums.filter( (num) => num > 4) 
// console.log(newNUms) // it will return 5, 6, 7, 8, 9, 10 in an array

// if we do the same thing with {}, we have to explicitly return the value
// const newNums = myNums.filter( (num) => { // here num is each item of the array
//     return num > 4
// })
// console.log(newNums)

// if we want to do the same thing using forEach loop

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums) // It will print all the numbers > 4, just like before

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === "History")

userBooks = books.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks)