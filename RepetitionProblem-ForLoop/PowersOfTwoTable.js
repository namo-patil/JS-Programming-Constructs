const prompt = require('prompt-sync')(); 
let number = prompt("Enter Number: ");
let base = 2;
for (let i = 0; i < number; i++) {
    result = Math.pow(base, i);
    console.log("Power of " + base + "^" + i + " is : ", result);
}

