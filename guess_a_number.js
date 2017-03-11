// Our program should repeat until the user guesses the correct number.
// Since the number of guesses is impossible to predict,
// we can use recursion to repeat the function until the correct answer is guessed.

function guessNumber(num) {
  // prompt user for a number
  guess = prompt("Guess a number between 1 and 100.");

  // convert guess to a number using +;
  guess = +guess;

  // define base case
  if (guess === number) {
    return console.log("You got it! The number was " + number);
  }
  // define recursive case
  guessNumber(num);
}

guessNumber(10);
