const inquirer = require("inquirer");
const figlet = require("figlet");
const colors = require("colors");

const Word = require("./Word").Word;

const wordArr = ["potato", "turnip", "GitLab", "GitHub", "Discord", "Facebook", "YouTube", "Microsoft", "Dell", "Jurassic Park"];

let word = new Word(wordArr[Math.floor((Math.random()) * wordArr.length)]);

let guesses = [];

let triesLeft = 10;
let guessesTaken = 0;
console.clear();

function askForLetter() {
    if (triesLeft > 0) {
        figlet(word.resWord(), function (err, data) {
            console.clear();
            console.log(colors.blue(data));
            console.log(`Tries Left: ${triesLeft}\nGuesses Taken: ${guessesTaken}\nGuesses: ${guesses.join(", ")}`);
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
                    if (answer.letter.length !== 1) {
                        askForLetter();
                        console.log("please choose only 1 letter");
                        return;
                    }
                    if (guesses.includes(answer.letter)) {
                        askForLetter();
                        console.log("please choose a letter not already chosen");
                        return;
                    }
                    const isCorrect = word.checkLetter(answer.letter);
                    guesses.push(answer.letter);
                    figlet(word.resWord(), function (err, data) {
                        guessesTaken++;
                        if (!isCorrect) triesLeft--;
                        if (err) return console.log(err);
                        console.clear();
                        console.log(colors.blue(data));
                        console.log(`Tries Left: ${triesLeft}\nGuesses Taken: ${guessesTaken}\nGuesses: ${guesses.join(", ")}`);
                        if (!word.isWordGuessed()) {
                            askForLetter();
                        } else {
                            figlet("WINNER! !\n--------", function (err, data) {
                                if (err) return console.log(err);
                                console.log(colors.green(data));
                                ending();
                            })
                        }
                    });
                })
        })
    } else {
        figlet("You Lost!!\n-------", function (err, data) {
            if (err) return console.log(err);
            console.log(colors.red(data));
            ending();
        })
    }
}
askForLetter();

function ending() {
    inquirer.prompt([{
            name: "option",
            type: "list",
            message: "Replay?",
            choices: ["yes", "no"]
        }])
        .then(answer => {
            if (answer.option === "yes") {
                word = new Word(wordArr[Math.floor((Math.random()) * wordArr.length)]);
                console.clear();
                triesLeft = 10;
                guessesTaken = 0;
                guesses = [];
                askForLetter();
            }
        })
}