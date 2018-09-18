// Require the Letter module exported from Letter.js
var Letter = require("./Letter.js");

// Constructor function for creating Word objects
var Word = function(wordToGuess) {
    this.letters = [];

    // For each character in the word to be guessed, create a new
    // Letter object and store it in the letters array
    for (var i = 0; i < wordToGuess.length; i++) {
        var l = new Letter(wordToGuess.charAt(i));
        this.letters.push(l);
    }

    // The getStringRepresentation function returns a string representing 
    // the word to be guessed by the user
    this.toString = function() {
        var representation = "";
        this.letters.forEach(function(letter) {
            var current = letter.toString();
            representation += current + " ";
        });
        return representation;
    };

    // The guessLetter function takes a character as an argument and calls the 
    // guess function on each letter object in the letters array
    this.guessLetter = function(character) {
        this.letters.forEach(function(letter) {
            letter.guess(character);
        });
    };
};

Word.prototype.isGuessed = function() {
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].guessed) {
            return false;
        }
    }
    return true;
};

// Export the Word constructor
module.exports = Word;

// var w = new Word("sack of potatoes");
// console.log(w);
// console.log(w.getStringRepresentation());
// w.guessLetter('m');
// console.log(w);
// console.log(w.getStringRepresentation());
// w.guessLetter('a');
// console.log(w);
// console.log(w.getStringRepresentation());
// w.guessLetter('r');
// console.log(w);
// console.log(w.getStringRepresentation());
// w.guessLetter('o');
// console.log(w);
// console.log(w.getStringRepresentation());
// w.guessLetter('t');
// console.log(w);
// console.log(w.getStringRepresentation());
// w.guessLetter('p');
// console.log(w);
// console.log(w.getStringRepresentation());