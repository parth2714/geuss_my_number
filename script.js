"use strict";

const cheacker = function (guessednumber, randomnumber) {
  if (guessednumber === randomnumber) {
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
  } else if (guessednumber >= randomnumber)
    document.querySelector(".message").textContent = "Lower";
  else document.querySelector(".message").textContent = "Higher";
};

let randomnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guessednumber = Number(document.querySelector(".guess").value);
  if (!guessednumber || guessednumber <= 0 || guessednumber > 20) {
    document.querySelector(".message").textContent =
      "❗ input a valid number 1 to 20";
  } else {
    score--;
    document.querySelector(".score").textContent = score;
    cheacker(guessednumber, randomnumber);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
});
