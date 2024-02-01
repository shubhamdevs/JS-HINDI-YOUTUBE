const myNums = [1, 2, 3]

// reduce() method 
// it takes a callback function with two method accumulator and current value

// easy way of doing
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval // here we are saying return accumulator + current value, but it doesn't know accumulator in the first time, so we give it a value sperately by comma(,)
// }, 0) // 0 is the initial value

// reduce method with arrow function
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay)