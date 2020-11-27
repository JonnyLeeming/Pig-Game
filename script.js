'use strict';
'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice1');
const dice2El = document.querySelector('.dice2');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';

  diceEl.classList.add('hidden');
  dice2El.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Roll dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generate a random dice roll
    const dice1 = Math.trunc(Math.random() * 6) + 1;
    const dice2 = Math.trunc(Math.random() * 6) + 1;

    //Display dice
    diceEl.classList.remove('hidden');
    dice2El.classList.remove('hidden');
    diceEl.src = `dice-${dice1}.png`;
    dice2El.src = `dice-${dice2}.png`;

    //Check for player hasn't rolled 1: if they have, switch to next player
    if (dice1 == 1 || dice2 == 1) {
      //Switch to next player
      switchPlayer();
    } else if (dice1 == 6 && dice2 == 6) {
      currentScore += dice1 + dice2;
      document.getElementById(`score--${activePlayer}`).textContent = 0;
      switchPlayer();
    } else {
      //Add dice to current score
      currentScore += dice1 + dice2;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if players score is greater or equal to 100
    if (scores[activePlayer] >= 100) {
      // if so finish the game
      playing = false;
      diceEl.classList.add('hidden');
      dice2El.classList.add('hidden');
      document;
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // If not switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
