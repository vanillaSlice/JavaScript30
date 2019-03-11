/*
 * Elements
 */

const holeElements = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('.start');

/*
 * Properties
 */

let lastHole;
let timeouts = [];
let timeUp = false;
let score = 0;

/*
 * Functions
 */

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holeElements);
  hole.classList.add('up');
  timeouts.push(setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time));
}

function startGame() {
  timeouts.forEach(timeout => clearTimeout(timeout));
  timeouts = [];
  holeElements.forEach(hole => hole.classList.remove('up'));
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  timeouts.push(setTimeout(() => {
    timeUp = true;
  }, 10000));
}

function bonk(e) {
  if (!e.isTrusted) return; // fake click
  score += 1;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

/*
 * Event Listeners
 */

startButton.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', bonk));
