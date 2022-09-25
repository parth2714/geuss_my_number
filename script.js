"use strict";

const cheacker = function (gussednumber, randomnumber) {
  if (gussednumber === randomnumber) {
    document.querySelector(".message").textContent = "🎉Correct Number";
    document.querySelector(".score").textContent =
      Number(document.querySelector(".score").textContent) + 1;
    if (
      Number(document.querySelector(".score").textContent) >
      Number(document.querySelector(".highscore").textContent)
    ) {
      document.querySelector(".highscore").textContent =
        document.querySelector(".score").textContent;
    }
  } else {
    if (gussednumber >= randomnumber) {
      if (gussednumber >= randomnumber + 3)
        document.querySelector(".message").textContent = "Too low";
      else document.querySelector(".message").textContent = "Lower";
    } else {
      if (gussednumber + 3 <= randomnumber)
        document.querySelector(".message").textContent = "Too High";
      else document.querySelector(".message").textContent = "Higher";
    }
  }
};

let randomnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = randomnumber;

document.querySelector(".check").addEventListener("click", function () {
  let score = Number(document.querySelector(".score").textContent);
  const randomnumber = Number(document.querySelector(".number").textContent);
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
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent =
    Math.trunc(Math.random() * 20) + 1;
});
