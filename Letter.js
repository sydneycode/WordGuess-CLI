// Global variable placeholder stores the character to be used as a placeholder
// when the letter has not been guessed
var PLACEHOLDER = "_";

// Constructor function for creating Letter objects
var Letter = function(underlyingCharacter) {
    this.underlyingCharacter = underlyingCharacter;

    // Initially, the letter has not been guessed
    this.guessed = false;

    // The getLetter function returns the underlying character if the letter has
    // been guessed; otherwise, it returns a placeholder
    this.getLetter = function() {
        if (guessed) {
            return this.underlyingCharacter;
        }
        else {
            return PLACEHOLDER;
        }
    };

    // The checkLetter function takes a character as an argument, and if the character 
    // matches the underlying character for the letter, then it updates the value of 
    // "guessed" to true
    this.checkLetter = function(character) {
        if (character === this.underlyingCharacter) {
            this.guessed = true;
        }
    }
};

// Export the Letter constructor
module.exports = Letter;