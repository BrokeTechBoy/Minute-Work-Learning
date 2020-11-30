"use strict";
//Testing the link
// document.querySelector(".message").textContent = "🎉 Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".score").textContent = 10;

// Defining some variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Refactoring some code with functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Game logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // if no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number!";

    // if player guessescorrectly
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // if guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("☹️ You Lost");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }
  }
});

// if guess is too high
// }else if (guess > secretNumber) {
// if (score > 1) {
//   document.querySelector(".message").textContent = "📈 Too High";
//   score--;
//   document.querySelector(".score").textContent = score;
// } else {
//   document.querySelector(".message").textContent = "☹️ You Lost";
//   document.querySelector(".score").textContent = 0;
//   document.querySelector("body").style.backgroundColor = "#FF0000";
// }

// if guess is too low
// } else if (guess < secretNumber) {
// if (score > 1) {
//   document.querySelector(".message").textContent = "📉 Too Low";
//   score--;
//   document.querySelector(".score").textContent = score;
// } else {
//   document.querySelector(".message").textContent = "☹️ You Lost";
//   document.querySelector(".score").textContent = 0;
//   document.querySelector("body").style.backgroundColor = "#FF0000";
// }
// }
// });

// To restart the game
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
