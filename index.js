// script.js

let secretNumber; // The secret number that the player needs to guess
let attempts = 0; // Number of attempts made by the player

// Start a new game
function startNewGame() {
  // Generate a random number between 1 and 100
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('attempts').textContent = attempts;
  document.getElementById('guess').value = ''; // Clear the guess input field
  document.getElementById('message-area').textContent = ''; // Clear the message area
  document.getElementById('play-again').classList.add('hidden'); // Hide Play Again button
  document.querySelector('button').disabled = false; // Enable the Guess button
}

// Check the player's guess
function checkGuess() {
  const playerGuess = parseInt(document.getElementById('guess').value);
  attempts++;

  // Validate the input
  if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
    document.getElementById('message-area').textContent = 'Please enter a valid number between 1 and 100.';
    document.getElementById('message-area').classList.add('message-low');
    return;
  }

  document.getElementById('attempts').textContent = attempts;

  // Check if the guess is correct
  if (playerGuess === secretNumber) {
    document.getElementById('message-area').textContent = `🎉 Correct! You guessed the number in ${attempts} attempts! 🎉`;
    document.getElementById('message-area').classList.add('message-correct');
    endGame();
  } else if (playerGuess < secretNumber) {
    document.getElementById('message-area').textContent = '🔻 Too low! Try again.';
    document.getElementById('message-area').classList.add('message-low');
  } else {
    document.getElementById('message-area').textContent = '🔺 Too high! Try again.';
    document.getElementById('message-area').classList.add('message-high');
  }
}

// End the game (disable guessing)
function endGame() {
  document.getElementById('play-again').classList.remove('hidden'); // Show Play Again button
  document.querySelector('button').disabled = true; // Disable the Guess button after game ends
}

// Initialize the game when the page loads
startNewGame();
