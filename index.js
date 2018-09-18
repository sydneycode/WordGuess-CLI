// Require the "inquirer" npm package for receiving user input
var inquirer = require("inquirer");

// Require the Word module exported from Word.js
var Word = require("./Word.js");

// The list of words from which a word will be selected
var listOfWords = ['Cat', 'Dog', 'Apple', 'Jurassic Park'];

// Global variables related to the current word to be guessed
var wordIndex;
var currentWord;
var wordToGuess;

// Global variable indicating how many guesses are remaining
var numGuesses;

// var donePlaying = false;
// var wordGuessed = false;

function playWord() {
    selectWord();
    promptUserToGuessLetter();
}

playWord();

// Randomly select a word from a list of words and use the "Word"
// constructor to store it
function selectWord() {
    wordIndex = Math.floor(Math.random() * listOfWords.length);

    currentWord = listOfWords[wordIndex];
    console.log(currentWord);

    wordToGuess = new Word(currentWord);
    console.log(wordToGuess.toString());

    numGuesses = 12;
}

function promptUserToGuessLetter() {
    if (wordToGuess.isGuessed() || numGuesses === 0) {
        console.log("done guessing this word");

        //checkIfUserWantsToPlayAgain();
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
            
            console.log(response);
            var guessedCorrectly = wordToGuess.guessLetter(response.letter);
            console.log(wordToGuess.toString());

            numGuesses--;
            console.log(numGuesses);

            if (guessedCorrectly) {
                console.log("CORRECT!!!");
            }
            else {
                console.log("INCORRECT!!!");
                console.log(numGuesses + " guesses remaining");
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

// inquirer.prompt([
//     {

//     }
// ]).then(function(response) {

// });