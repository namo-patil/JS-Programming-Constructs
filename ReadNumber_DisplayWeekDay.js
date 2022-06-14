const prompt = require('prompt-sync')(); 
let number = prompt("Enter Number: ");
if(number == 1){
    console.log("Monday")
}else if(number == 2){
    console.log("Tuesday")
}else if(number == 3){
    console.log("wednesday")
}else if(number == 4){
    console.log("Thursday")
}else if(number == 5){
    console.log("Friday")
}else if(number == 6){
    console.log("Saturday")
}else if(number == 7){
    console.log("Sunday")
}
 else{
    console.log("Invalid number");
}