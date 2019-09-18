# Js Word Guess

welcome to js word guess this is a node.js terminal application for guessing a randomly picked word from a preset array of chosen words

# Usage

- to use this clone this repo and npm install to install the required packages
- then type `node index.js` and follow the onscreen text
- <strong>Below is a couple examples of how to use the app</strong>

<strong>Below is a Winning example</strong>
![Well there was a gif here...](https://i.imgur.com/vq9nhce.gif)

<strong>Below is a Loosing example</strong>
![Well there was a gif here...](https://i.imgur.com/UIjSCwM.gif)

# file description

- `Letter.js` Contains a constrictor/object named Letter for letters to be used in a chosen word. detailed description of this file below

  - `letter` stores the passed in string
  - `isGuessed` stores a boolean variable weather or that the letter has been guessed
  - `display` is a method that returns the character if the boolean is true otherwise it returns an underscore
  - `checkChar` is a method that checks a passed in argument _STRING_ to see if it is the same as letter stored in the object or not and updates the boolean of the object accordingly and returns a boolean

- `Word.js` Contains a constrictor/object named Word, this depends on the Letter constructor mentioned above. this is used to create a object of the word passed in to the constructor its self. detailed description of this file below

  - `word` stores the word string passed in to the constructor its self
  - `letterArr` stores an array of the above letter objects from the passed in word mentioned above
  - `resWord` this method returns a string that represents the word in its current state of being solved or not
  - `checkLetter` is a method that checks a passed in argument _STRING_ of a letter guessed by the user against the objects in the letterArr and returns a boolean based on weather or not a letter has been guessed
  - `isWordGuessed` is a method that returns a boolean based on weather or not the word is guessed

- `index.js` is the logic of the game and can be run using `node index.js`
  - this randomly selects a word from an array and uses [inquirer](https://www.npmjs.com/package/inquirer) to ask the user for a guess of a letter
  - this uses the npm package [figlet](https://www.npmjs.com/package/figlet) and [colors](https://www.npmjs.com/package/colors) for colored ascii text in the console to make the words look cool
