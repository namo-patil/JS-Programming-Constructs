const prompt = require('prompt-sync')(); 
let number = prompt("Enter Positive Number: ");
// let isPrime = true;
if (number == 1 || number == 0) {
    console.log("0 and 1 are not prime numbers");
}
for (var i = 2; i < number; i++) {
    if (number % i == 0){
        return false;
        break;
    }
    else{
        console.log(number , " is prime number");
    }
}
// if (isPrime) {
//     console.log(number , " is prime number");
// }
// console.log(number , " is not prime number");