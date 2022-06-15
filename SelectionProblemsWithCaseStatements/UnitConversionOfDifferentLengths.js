const prompt = require('prompt-sync')(); 
const feetToInch = 1; 
const feetToMeter = 2
const inchToFeet = 3;
const meterToFeet = 4;
let conversion = 0;
console.log("For Unit Conversion Choose The Option  : \n 1. feet To Inch \n 2. feetToMeter \n 3. inchToFeet \n 4. meterToFeet");
let option = Number(prompt("Enter Option Number: "));
let length = Number(prompt("Enter Length: "));
switch(option) {
    case feetToInch:
        conversion = length * 12;
        console.log(conversion, " inch");
        break;
    case feetToMeter:
        conversion = length / 3.28084;
        console.log(conversion, " meter");
        break;
    case inchToFeet:
        conversion = length / 12;
        console.log(conversion, " feet");
        break;
    case meterToFeet:
        conversion = length * 3.28084;
        console.log(conversion, " feet");
        break;
    default:
        console.log("Invalid Number")
}