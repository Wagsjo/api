const ps = require("prompt-sync");
const prompt = ps();
let n = prompt("gissa på ett nummer mellan 1 och 100: ")

function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}
let num = randomNum()

let antalgissningar = 0;
afterGuess();
function afterGuess() {
  if (n === num) {
    console.log("gz")
    return "gz";
  } else if (n < num) {
    antalgissningar++;
    console.log( `högre! (${antalgissningar} försöket)`)
    n = prompt("> ")
    afterGuess()
  } else if (n > num) {
    antalgissningar++;
    console.log(`lägre! (${antalgissningar} försöket)`)
    n = prompt("> ")
    afterGuess()
  }
}
