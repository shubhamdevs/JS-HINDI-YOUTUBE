// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

// Here key is which value we need to check again and again
// case checks for the condition
// there is a defalut condition, if no checks has passed
// break -> if we don't apply this break key then when a condition is passed it will execute all code after that point except default.


const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break; 
    case 4:
        console.log("april");
        break; 
    default:
        console.log("default case match")
        break;
    
}

