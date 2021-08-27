"use strict";
window.onload = function () {
  const h1 = document.querySelector("h1");
  const btnNewgame = document.getElementById("btn-newgame");
  const selectionBtns = document.getElementById("selection-btns");
  const scoresDisplay = document.getElementById("scores-display");
  const score1 = document.getElementById("score1");
  const score2 = document.getElementById("score2");
  const btnRock = document.getElementById("btn-rock");
  const btnPaper = document.getElementById("btn-scissors");
  const btnScissors = document.getElementById("btn-scissors");
  const handOne = document.getElementById("hand1");
  const handTwo = document.getElementById("hand2");
  const buttons = document.querySelectorAll("#selection-btns > button");

  const newGame = () => {
    btnNewgame.classList.add("hidden");
    selectionBtns.classList.remove("hidden");
    scoresDisplay.classList.remove("hidden");
    h1.textContent = "Rock, paper, scissors...?";
    h1.style.marginTop = "2.5rem";
    let score = [0, 0];
    score1.textContent = "0";
    score2.textContent = "0";

    const computerPlay = () => {
      const diceRoll = Math.floor(Math.random() * 3);
      if (diceRoll === 0) return "r";
      else if (diceRoll === 1) return "p";
      else return "s";
    };

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        if (score[0] < 5 && score[1] < 5) {
          const playGame = pick => {
            const playRound = (playerSelection, computerSelection) => {
              if (playerSelection === computerSelection) {
                return ["Draw.", 0];
              } else if (playerSelection === "r" && computerSelection === "p") {
                return ["Paper beats rock.", 2];
              } else if (playerSelection === "r" && computerSelection === "s") {
                return ["Rock beats scissors.", 1];
              } else if (playerSelection === "p" && computerSelection === "r") {
                return ["Paper beats rock.", 1];
              } else if (playerSelection === "p" && computerSelection === "s") {
                return ["Scissors beats paper.", 2];
              } else if (playerSelection === "s" && computerSelection === "r") {
                return ["Rock beats scissors.", 2];
              } else if (playerSelection === "s" && computerSelection === "p") {
                return ["Scissors beats paper.", 1];
              }
            };
            const result = playRound(pick, computerPlay());
            if (result[1] === 0) {
              h1.textContent = "Draw.";
            }
            if (result[1] === 1) {
              h1.textContent = `You win. ${result[0]}`;
              score[0]++;
            }
            if (result[1] === 2) {
              h1.textContent = `You lose. ${result[0]}`;
              score[1]++;
            }
            score1.textContent = score[0];
            score2.textContent = score[1];
            // console.log(result);
            // console.log(score);
            if (score[0] === 5) {
              h1.textContent = "You win the game!";
              btnNewgame.classList.remove("hidden");
              selectionBtns.classList.add("hidden");
            }
            if (score[1] === 5) {
              h1.textContent = "You lost the game.";
              btnNewgame.classList.remove("hidden");
              selectionBtns.classList.add("hidden");
            }
          };
          playGame(button.id[4]);
        }
      });
    });
  };
  btnNewgame.addEventListener("click", newGame);
};
