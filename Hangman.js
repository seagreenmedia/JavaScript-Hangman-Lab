class Hangman {

    constructor(phrase) {
        this.phrase = phrase;
        this.guesses = 6;
        this.message = [];
        this.lettersGuess = [];
        this.letter = [];
    }

    getDisplayMessage() {
        const regex = /\S/g;
        let displayMessage = this.phrase.replace(regex, '*');
        let position = this.phrase.search(this.letter);
        console.log(position);

        return displayMessage;
    }

    guessLetter(letter) {
        var count = 0;
        this.letter = letter;
        for (var i = 0; i < this.phrase.length; i++) {
            if (letter.toLowerCase() == this.phrase[i].toLowerCase()) {
                count++;
                this.lettersGuess += letter;
            }
        }
        if (count == 0) {
            this.guesses--;
        }
    }

    getRemainingGuesses() {
        let guessCount = 6;
        for (let i = 0; i > 7; i++) {
            if (guessCount === 6) {
                return 6;
            } else if (guessCount === 5) {
                return 5;
            }
        }
    }

    isMessageSolved() {
        return false;
    }

}

module.exports = Hangman;