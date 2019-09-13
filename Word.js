const Letter = require("./Letter").letter;

module.exports.word = function (word) {
    this.word = word;
    this.letterArr = [];
    word.split("").forEach(newLetter => {
        if (newLetter !== " ") {
            let letter = new Letter(newLetter);
            this.letterArr.push(letter);
        } else {
            this.letterArr.push(" ");
        }
    });
    this.resWord = function () {
        let wordStr = "";
        this.letterArr.forEach(letter => {
            if (letter !== " ") {
                wordStr = `${wordStr} ${letter.display()}`;
            } else {
                wordStr = `${wordStr}  `;
            }
        })
        return wordStr;
    }
    this.checkLetter = function (guess) {
        this.letterArr.forEach(letter => {
            if (letter !== " ") {
                letter.checkChar(guess);
            }
        })
    }
}