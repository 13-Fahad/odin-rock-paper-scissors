"use strict";

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

        if (randomInt === 0) {
            return "rock";
        } else if (randomInt === 1) {
            return "paper";
        } else {
            return "scissors";
        };
};

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (computerSelection === playerSelection) {
        return "tie";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "computer";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "player";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "computer";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "player";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "computer";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "player";
    } else {
        console.log("Please enter 'Rock' 'Paper' or 'Scissors'"); 
    };
};

let playerScore = 0;

function playGame() {
    let winner = playRound();
    if (winner === "computer") {
        --playerScore;
        console.log("You lost a game.");
    } else if (winner === "player") {
        ++playerScore;
        console.log("You won a game.");
    } else if (winner === "tie") {
        console.log("You tied a game.");
    } else {
        playGame();
    }
};

playGame();
playGame();
playGame();
playGame();
playGame();

if (playerScore === 0) {
    console.log("It's a tie overall.");
} else if (playerScore >= 1) {
    console.log("You won overall.");
} else {
    console.log("You lost overall.");
};