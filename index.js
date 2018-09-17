// Require the "inquirer" npm package for receiving user input
var inquirer = require("inquirer");

// Require the Word module exported from Word.js
var Word = require("./Word.js");

// Randomly select a word from a list of words and use the "Word"
// constructor to store it

// Prompt the user for each letter guess and keep track of the 
// user's remaining guesses
inquirer.prompt([
    {
        type: "input",
        name: "userGuess",
        message: "Guess a letter!"
    }
// Store the user's response in a variable called response
]).then(function(response) {
    console.log(response.userGuess);
});
