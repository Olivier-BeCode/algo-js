const readlineSync = require("readline-sync");

let userNumber = readlineSync.question ("Give an integer (not too high) ");
let n = (Number(userNumber))

function fibonacci(n) {
    if (n < 2) {
      return n;
    } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
console.log(fibonacci(n));