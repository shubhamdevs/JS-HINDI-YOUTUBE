const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//map method takes a callbak function and it also returns values
// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums)

//chaning methods

const newNums = myNumbers
                .map((num) => num * 10) // Here first return pass the values to next method
                .map( (num) => num + 1) // it will add 1 to each value
                .filter( (num) => num >= 40)

console.log(newNums)

