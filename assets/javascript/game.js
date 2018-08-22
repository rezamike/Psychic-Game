var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessLeft = 9
var guessing = [];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function (event) {
    var balls = event.key.toLowerCase();

    if (computerGuess === balls) {
        win++;
        guessLeft = 9;
        guessing = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    else {
        guessLeft--;
        guessing.push(balls);
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    }

    if (guessLeft === 0) {
        guessLeft = 9;
        loss++;
        guessing = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

console.log(computerGuess)

document.getElementById("wins").textContent = win;
document.getElementById("losses").textContent = loss;
document.getElementById("guess").textContent = guessLeft;
document.getElementById("answers").textContent = guessing;
}