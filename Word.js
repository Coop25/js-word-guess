const Letter = require("./Letter").Letter;

module.exports.Word = function (word) {
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
        let isCorrect = false;
        this.letterArr.forEach(letter => {
            if (letter !== " ") {
                let isLetter = letter.checkChar(guess);
                if (!isCorrect) isCorrect = isLetter;
            }
        })
        return isCorrect;
    }
    this.isWordGuessed = function(){
        let count = 0;
        this.letterArr.forEach(letter => {
            if (letter !== " ") {
                if(letter.isGuessed) count++;
            } else {
                count++;
            }
        })
        if (count === this.letterArr.length){
            return true;
        } else {
            return false;
        }
    }
}