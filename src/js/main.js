'use strict';

const select = document.querySelector('.js-select');
const btnGo = document.querySelector('.js-go');
const totalResult = document.querySelector('.js-result');
const gamerResult = document.querySelector('.js-gamer');
const computResult = document.querySelector('.js-computer');
let playerScore = 0;
let computerScore = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function gameComputer() {
  const randomNumber = getRandomNumber(9);
  if (randomNumber <= 3) {
    return 'Piedra';
  } else if (randomNumber >= 7) {
    return 'Papel';
  } else {
    return 'Tijera';
  }
}

function result() {
  const computerChoice = gameComputer();
  const playerChoice = select.value;

  computResult.textContent = `La computadora eligió: ${computerChoice}`;
  gamerResult.textContent = `Tu elegiste: ${playerChoice}`;

  if (playerChoice === computerChoice) {
    totalResult.textContent = 'Empate';
  } else if (
    (playerChoice === 'Piedra' && computerChoice === 'Tijera') ||
    (playerChoice === 'Papel' && computerChoice === 'Piedra') ||
    (playerChoice === 'Tijera' && computerChoice === 'Papel')
  ) {
    totalResult.textContent = '¡Has ganado!';
    playerScore++;
  } else {
    totalResult.textContent = '¡Has perdido!';
    computerScore++;
  }

  // Mostrar puntuaciones y reiniciar juego si se alcanza una puntuación máxima (10 en este caso)
  if (playerScore === 10 || computerScore === 10) {
    alert(`Juego terminado. Puntuación final: Jugador ${playerScore}, Computadora ${computerScore}`);
    playerScore = 0;
    computerScore = 0;
  }
}

btnGo.addEventListener('click', result);
