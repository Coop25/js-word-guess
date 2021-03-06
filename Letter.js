module.exports.Letter = function (letter) {
    this.letter = letter;
    this.isGuessed = false;
    this.display = function () {
        switch (this.isGuessed) {
            case true:
                return this.letter;
                break;
            case false:
                return "_";
                break;
        }
    }
    this.checkChar = function (guess) {
        if (guess.toLowerCase() === this.letter.toLowerCase()) {
            this.isGuessed = true;
            return true;
        }
        return false;
    }
}