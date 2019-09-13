module.exports.letter = function (letter) {
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
        if (guess === this.letter) {
            this.isGuessed = true;
        }
        return;
    }
}