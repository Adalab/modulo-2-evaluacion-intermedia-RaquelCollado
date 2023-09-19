'use strict'

const select = document.querySelector('.js-select');
const btnGo = document.querySelector('.js-go');
const totalResult = document.querySelector('js-result');
const gamerResult = document.querySelector('js-gamer');
const computResult = document.querySelector('js-computer');



function getRandomNumber(max) { 
    return Math.ceil(Math.random() *max); 
  }  


function gameComputer(){
const randomNumber = getRandomNumber (9);
if (randomNumber<=3){
    return 'Piedra';
}else if (randonNumber >=7){
    return 'Papel';
}else {
    return 'Tijera';
}
}

function result (select, gameComputer) {
    if (select.value === gameComputer){
        return 'Empate';
    }
    else if (
        (select.value === 'Piedra' && gameComputer === 'Tijera') || 
        (select.value === 'Papel' && gameComputer === 'Piedra') || 
        (select.value === 'Tijera' && gameComputer === 'Papel')
        ){
        return '¡Has ganado!';
        }
    else {
        return "¡Has Perdido!";
      }
    }

btnGo.addEventListener('click', result);













  