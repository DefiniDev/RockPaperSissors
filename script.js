"use strict";

const computerSelection = computerPlay();
const playerInput = prompt("Rock, paper, scissors...?");
const playerSelection = nullCheck(playerInput);

function nullCheck(playerInput) {
  if (playerInput === null) {
    return null;
  } else {
    return playerInput.toLowerCase();
  }
}

function computerPlay() {
  const diceRoll = Math.floor(Math.random() * 3);
  if (diceRoll === 0) return "rock";
  else if (diceRoll === 1) return "paper";
  else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "Draw.";
  else {
    if (playerSelection === "rock" && computerSelection === "paper")
      return "You lose. Paper beats rock.";
    else if (playerSelection === "rock" && computerSelection === "scissors")
      return "You win. Rock beats scissors.";
    else if (playerSelection === "paper" && computerSelection === "rock")
      return "You win. Paper beats rock.";
    else if (playerSelection === "paper" && computerSelection === "scissors")
      return "You lose. Scissors beats paper.";
    else if (playerSelection === "scissors" && computerSelection === "rock")
      return "You lose. Rock beats scissors.";
    else if (playerSelection === "scissors" && computerSelection === "paper")
      return "You win. Scissors beats paper.";
    else if (playerSelection !== null)
      return "Invalid input! Please choose rock, paper, or scissors.";
    else return "Thanks for playing!";
  }
}
console.log(playRound(playerSelection, computerSelection));

// ***Function solution using basic math***
// const computerSelection = 1;
// const playerSelection = 1;
// function computerPlay() {
//   return Math.floor(Math.random() * 3);
// }
// function convertGuesstoNumber(playerSelection) {
//   if (playerSelection === "rock") {
//     return 0;
//   } else if (playerSelection === "paper") {
//     return 1;
//   } else if (playerSelection === "scissors") {
//     return 2;
//   } else {
//     console.log("Invalid input!");
//   }
// }
// function playRound(playerSelection, computerSelection) {
//   console.log("player:" + playerSelection);
//   console.log("computer:" + computerSelection);
//   if (
//     playerSelection + 1 === computerSelection ||
//     playerSelection - 2 === computerSelection
//   ) {
//     console.log("You lose.");
//   } else if (playerSelection - 1 === computerSelection) {
//     console.log("You win!");
//   } else {
//     console.log("Draw.");
//   }
//   console.log("player:" + playerSelection);
//   console.log("computer:" + computerSelection);
// }
// playRound(playerSelection, computerSelection);
// const computerSelection = computerPlay();
// const playerSelection = convertGuesstoNumber(
//   prompt("Rock, paper, scissors...?").toLowerCase()
// );
// const computerSelection = 1;
