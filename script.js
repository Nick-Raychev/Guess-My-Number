'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  //When there is no input
  if (!guess) {
    displayMessage('⛔ No number');
    // When they select a number not in the selected range
  } else if (guess < 0 || guess > 20) {
    displayMessage(`Not in the range budy! 🤣
    Try again! 💪`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High! 📈 ' : 'Too Low! 📉 ');
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game! 💥 ');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // Message reset
  displayMessage('Start guessing...');
  // Value reset
  document.querySelector('.guess').value = '';
  // Score reset
  document.querySelector('.score').textContent = score;
  // SecretNumber reset
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  // Making the page background to the original color
  document.querySelector('body').style.backgroundColor = '#222';
});
