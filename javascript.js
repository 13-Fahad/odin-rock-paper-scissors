"use strict";

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
        if (randomInt === 0) {
            return "rock";
        } else if (randomInt === 1) {
            return "paper";
        } else {
            return "scissors";
        }
}

const computerSelection = getComputerChoice();

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return console.log("The computer picked the same as you.");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return console.log("The computer picked Rock. You lost.")
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return console.log("The computer picked Rock. You won.")
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return console.log("The computer picked Paper. You lost.")
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return console.log("The computer picked Paper. You won.")
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return console.log("The computer picked Scissors. You lost.")
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return console.log("The computer picked Scissors. You won.")
    } else {
        return console.log("Please enter 'Rock' 'Paper' or 'Scissors'")
    }
}