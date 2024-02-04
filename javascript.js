"use strict";

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
        if (randomInt === 0) {
            return "Rock";
        } else if (randomInt === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
}

const computerSelection = getComputerChoice();

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {

    if (computerSelection === playerSelection) {
        return console.log("The computer picked the same as you.");
    } else if (computerSelection === "Rock" && playerSelection === "scissors") {
        return console.log("The computer picked Rock. You lost.")
    } else if (computerSelection === "Rock" && playerSelection === "paper") {
        return console.log("The computer picked Rock. You won.")
     } else if (computerSelection === "Paper" && playerSelection === "rock") {
        return console.log("The computer picked Paper. You lost.")
    } else if (computerSelection === "Paper" && playerSelection === "scissors") {
        return console.log("The computer picked Paper. You won.")
    } else if (computerSelection === "Scissors" && playerSelection === "paper") {
        return console.log("The computer picked Scissors. You lost.")
    } else if (computerSelection === "Scissors" && playerSelection === "rock") {
        return console.log("The computer picked Scissors. You won.")
    } else {
        return console.log("Please enter 'Rock' 'Paper' or 'Scissors'")
    }
}