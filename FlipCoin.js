let head = 0;
let tail = 1;
function  randomCheck(){
    return(Math.floor(Math.random() * 2));
}
if (randomCheck() == 0) {
    console.log("Head");    
}
else {
    console.log("Tail");
}
