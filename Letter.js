// Constructor function for creating Letter objects
var Letter = function(underlyingCharacter) {
    this.underlyingCharacter = underlyingCharacter;

    // Initially, the letter has not been guessed (unless the underlying character 
    // is a space)
    if (this.underlyingCharacter === " ") {
        this.guessed = true;
    }
    else {
        this.guessed = false;
    }
    
    // The toString function returns the underlying character if the letter has
    // been guessed; otherwise, it returns a placeholder (an underscore)
    this.toString = function() {
        var placeholder = "_";
        if (this.guessed) {
            return this.underlyingCharacter;
        }
        else {
            return placeholder;
        }
    };

    // The guess function takes a character as an argument, and if the character 
    // matches the underlying character for the letter, then it updates the value of 
    // "guessed" to true
    this.guess = function(character) {
        if (character.toLowerCase() === this.underlyingCharacter.toLowerCase()) {
            this.guessed = true;
            return true;
        }
        return false;
    }
};

// Export the Letter constructor
module.exports = Letter;

var l = new Letter("l");
console.log(l);
console.log(l.toString());
console.log(l.guess('a'));
console.log(l);
console.log(l.toString());
console.log(l.guess('l'));
console.log(l);
console.log(l.toString());
console.log(l.guess('l'));
