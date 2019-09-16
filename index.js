const inquirer = require("inquirer");
const figlet = require("figlet");
const colors = require("colors");

const Word = require("./Word").word;

const wordArr = ["potato", "turnip", "GitLab", "GitHub", "Discord", "Facebook", "YouTube", "Microsoft", "Dell", "Jurassic Park"];

const word = new Word(wordArr[Math.floor((Math.random()) * wordArr.length)]);

let triesLeft = 10;
let guessesTaken = 0;

function askForLetter() {
    if (triesLeft > 0) {
        inquirer.prompt([{
                name: "letter",
                message: "Guess a Letter!",
                validate: function (name) {
                    const isName = name !== "";
                    if (!isName) console.log("Please choose a Letter");
                    return isName;
                }
            }])
            .then(answer => {
                const isCorrect = word.checkLetter(answer.letter);
                figlet(word.resWord(), function (err, data) {
                    guessesTaken++;
                    if (!isCorrect) triesLeft--;
                    if (err) return console.log(err);
                    console.clear();
                    console.log(colors.blue(data));
                    console.log(`Tries Left: ${triesLeft}\nGuesses Taken: ${guessesTaken}`);
                    if (!word.isWordGuessed()) {
                        askForLetter();
                    } else {
                        figlet("WINNER! !\n--------", function (err, data) {
                            if (err) return console.log(err);
                            console.log(colors.green(data));
                        })
                    }
                });
            })
    } else {
        figlet("You Lost!!\n-------", function (err, data) {
            if (err) return console.log(err);
            console.log(colors.red(data));
        })
    }
}
askForLetter();