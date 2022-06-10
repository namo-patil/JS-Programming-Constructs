// Using Random Function finds Maximum and Minimum Value amongs 5 Random 3 Digit Values

let minimum = Number.MAX_VALUE;
let maximum = Number.MIN_VALUE;
for(let i = 1; i <= 5; i++) {
    let random = Math.floor(Math.random() * 900) + 100;
    console.log("Random Number" + i + ": " + random);
    if (random > maximum) {
        maximum = random;
    }
    if (random < minimum) {
        minimum = random;
    }
}
console.log("Maximum: "+ maximum + "\nMinimum: " + minimum);