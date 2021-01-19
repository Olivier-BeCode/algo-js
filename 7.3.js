const readlineSync = require("readline-sync");

let userNumber = readlineSync.question ("Give an positive integer ");
let n = (Number(userNumber))

console.log(`The factors of ${n} is:`);

// looping through 1 to num
for (let i = 2; i < n; i++) {

    // check if number is a factor
    if(n % i == 0) {
        console.log(i);
    }
}