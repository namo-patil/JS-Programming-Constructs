// Used Random Function to get Single digit
console.log("---Random Function to get Single digit---");
let random = Math.floor(Math.random() * 10);
console.log("Random digit: " + random);

console.log("**************************************************");

// Used Random to get Dice Number between 1 to 6
console.log("---Random to get Dice Number between 1 to 6---");
let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log("Dice Number: " + randomNumber);

console.log("**************************************************");

// Added two Random Dice Number and Print the Result
console.log("---Added two Random Dice Number---");
let number1 = Math.floor(Math.random() * 6) + 1;
console.log("number1: " + number1);
let number2 = Math.floor(Math.random() * 6) + 1;
console.log("number2: " + number2);
let sum = number1 + number2;
console.log("Sum: " + sum);

console.log("**************************************************");

// Write program that reads 5 Random 2 Digit values ,then find their sum and the average
console.log("---Reads 5 Random 2 Digit values then Calculated their Sum and Average---");
function randomValue(){
    let sum = 0;
    for(let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * 90) + 10;
        console.log(random);
        sum += random;
    }
    console.log("Sum: " + sum);
    console.log("Average: " + sum/5);
}
randomValue();