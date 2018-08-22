var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 1
var loss = 1
var guessLeft = 9
var winning = document.getElementById("wins");
var losing = document.getElementById("losses");
var guessing = document.getElementById("guess");
var user = document.getElementById("answers");

document.onkeyup = function (event) {
    var balls = event.key;
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (computerGuess === balls) {
        winning.textContent = (win++);
        guessLeft = 9;
    }

    else {
        guessing.textContent = (guessLeft--);
    }

    user.innerHTML = (balls)

    if (guessLeft < 0) {
        guessLeft = 9;
        losing.textContent = (loss++);
    }


console.log(balls);
console.log("------------");
// console.log(loss);
// console.log("------------");
// console.log(guessLeft);
// console.log("------------");
// console.log(win);
// console.log("------------");
console.log(computerGuess);
console.log("------------");
}