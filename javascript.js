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