// Require the "inquirer" npm package for receiving user input
var inquirer = require("inquirer");

// Require the Word module exported from Word.js
var Word = require("./Word.js");

// Require the fs package in order to read words in from a text file to create a word bank
var fs = require("fs");

// A list of words from which one will be selected for the user to guess (initially empty)
var wordList = [];

// Variables related to the current word to be guessed
var wordIndex;
var currentWord;
var wordToGuess;

// Variable indicating how many guesses are remaining
var numGuesses;

// Read the words in from a text file and store them in the wordList array
fs.readFile("wordbank.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    wordList = data.split(",");
    //console.log(wordList);
    //console.log(wordList.length);

    // Once the word bank has been created, start playing the game
    playWord();
});

function playWord() {
    selectWord();
    promptUserToGuessLetter();
}

// Randomly select a word from a list of words and use the "Word"
// constructor to store it
function selectWord() {
    wordIndex = Math.floor(Math.random() * wordList.length);

    currentWord = wordList[wordIndex];
    // Print statement for testing
    //console.log(currentWord);

    wordToGuess = new Word(currentWord);
    console.log(wordToGuess.toString());

    numGuesses = 13;
}

function promptUserToGuessLetter() {
    if (wordToGuess.isGuessed()) {
        console.log("\x1b[37m", "You got it right!  Next word!");

        //checkIfUserWantsToPlayAgain();
        playWord();
    }
    else if (numGuesses === 0) {
        console.log("\x1b[37m", "Sorry, you ran out of guesses.  The word was: " + currentWord);
        console.log("On to the next word!");

        playWord();
    }
    else {
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter!",
                validate: function(value) {
                if (value.length === 1) {
                    return true;
                }
                return false;
                }
            }
        ]).then(function(response) {
            var guessedCorrectly = wordToGuess.guessLetter(response.letter);
            console.log(wordToGuess.toString());

            numGuesses--;
            //console.log(numGuesses);

            if (guessedCorrectly) {
                // print "correct" in the color green
                console.log("\x1b[32m", "CORRECT!!!");
            }
            else {
                // print "incorrect" in the color red
                console.log("\x1b[31m", "INCORRECT!!!");
                // switch the color of the text back to white and display
                // the number of guesses remaining
                console.log("\x1b[37m", numGuesses + " guesses remaining");
            }

            promptUserToGuessLetter();
        });
    }
}

function checkIfUserWantsToPlayAgain() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?"
        }
    ]).then(function(response) {
        console.log(response);
        if (response.playAgain) {
            playWord();
        }
        // otherwise the game is over
    });
}