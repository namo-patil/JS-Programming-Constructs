const prompt = require('prompt-sync')(); 
let number = prompt("Enter Number: ");
let harmonicValue = 0;
        for (let i = 1; i <= number; i++) {
            harmonicValue += 1 / i;
            console.log("H" , i , " : " , harmonicValue);
        }