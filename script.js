"use strict";

const cheacker = function (guessednumber, randomnumber) {
  if (guessednumber === randomnumber) {
    //if player wins
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".message").textContent = "🎉Correct Number";
    document.querySelector(".number").textContent = guessednumber;
    document.querySelector(".score").textContent =
      Number(document.querySelector(".score").textContent) + 1;
    if (
      Number(document.querySelector(".score").textContent) >
      Number(document.querySelector(".highscore").textContent)
    ) {
      document.querySelector(".highscore").textContent =
        document.querySelector(".score").textContent;
    }
  } else if (guessednumber > randomnumber)
    //if player loses
    document.querySelector(".message").textContent = "Lower";
  else document.querySelector(".message").textContent = "Higher";
};

let randomnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//when player clicks on check
document.querySelector(".check").addEventListener("click", function () {
  const guessednumber = Number(document.querySelector(".guess").value);
  if (!guessednumber || guessednumber <= 0 || guessednumber > 20) {
    document.querySelector(".message").textContent =
      "❗ input a valid number 1 to 20";
  } else {
    score--;
    if (score >= 0) {
      document.querySelector(".score").textContent = score;
      cheacker(guessednumber, randomnumber);
    } // if the score goes blow 0
    else
      document.querySelector(".message").textContent =
        "✨ you lost Please try again";
  }
});
// when player clicks on again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
});
