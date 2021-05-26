'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNum);
let score = document.querySelector('.score').textContent;
let highScore = 0;

const checkGuess = () => {
  if (document.querySelector('.guess').value > secretNum) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (document.querySelector('.guess').value < secretNum) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lose!';
    }
  }
};

const displayMessage = (element, message) => {
  document.querySelector(`.${element}`).textContent = message;
};

const resetGame = () => {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  if (guess == secretNum) {
    displayMessage('message', 'Correct!');
    displayMessage('number', secretNum);
    if (highScore < score) {
      highScore = score;
    }
    document.body.style.backgroundColor = '#60b347';
    displayMessage('highscore', highScore);
    document.querySelector('.number').style.width = '30rem';
  } else {
    checkGuess();
    displayMessage('score', score);
  }
});

document.querySelector('.again').addEventListener('click', resetGame);
