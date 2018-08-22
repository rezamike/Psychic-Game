var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 1
var loss = 0
var guessLeft = 9
var winning = document.getElementById("wins");
var losing = document.getElementById("losses");
var guessing = document.getElementById("guess");

document.onkeyup = function (event) {
    var balls = event.key;
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var user = document.getElementById("answers");

    balls.textContent = ("Guesses: " + "answers");

    if (computerGuess === balls) {
        winning.textContent = (win++);
    }

    else {
        guessing.textContent = (guessLeft--);
    }

    if (guessLeft === 0) {
        alphabet[Math.floor(Math.random() * alphabet.length)];
        guessLeft = 9;
        losing.textContent = (loss++);
    }

    console.log(balls);
console.log("------------");
    console.log(loss);
    console.log("------------");
    console.log(guessLeft);
    console.log("------------");
    console.log(win);
    console.log("------------");
    console.log(computerGuess);
    console.log("------------");
}