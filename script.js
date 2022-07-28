'use strict';

// Selecting elements
const num1J1 = document.querySelector('#num1--1');
const num2J1 = document.querySelector('#num2--1');
const operadorJ1 = document.querySelector('#operador--1');
const operadorJ2 = document.querySelector('#operador--2');
const num1J2 = document.querySelector('#num1--2');
const num2J2 = document.querySelector('#num2--2');
const respuestaJ1 = document.querySelector('#respuesta--1');
const respuestaJ2 = document.querySelector('#respuesta--2');

let n1, n2;

const tiempo1 = document.querySelector('.tiempo--1');
const numTiempo1 = document.querySelector('.numTiempo--1');
const calculo1 = document.querySelector('.calculo--1');
const contador1 = document.querySelector('.numContador--1');
const correctas1 = document.querySelector('.numCorrectas--1');
const incorrectas1 = document.querySelector('.numIncorrectas--1');

const tiempo2 = document.querySelector('.tiempo--2');
const numTiempo2 = document.querySelector('.numTiempo--2');
const calculo2 = document.querySelector('.calculo--2');
const contador2 = document.querySelector('.numContador--2');
const correctas2 = document.querySelector('.numCorrectas--2');
const incorrectas2 = document.querySelector('.numIncorrectas--2');

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let scores, contadorJ1, contadorJ2, jugadorActivo, jugando;
// Starting conditions
const initGame = function () {
  scores = [0, 0];
  contadorJ1 = 0;
  contadorJ2 = 0;
  jugando = true;

  tiempo1.classList.add('hidden');
  tiempo2.classList.add('hidden');
  calculo1.classList.add('hidden');
  calculo2.classList.add('hidden');

  numTiempo1.textContent = 10;
  numTiempo2.textContent = 10;
  contador1.textContent = 60;
  contador2.textContent = 60;
  correctas1.textContent = 0;
  correctas2.textContent = 0;
  incorrectas1.textContent = 0;
  incorrectas2.textContent = 0;
};
initGame();

const startGame = function () {
  tiempo1.classList.remove('hidden');
  tiempo2.classList.remove('hidden');
  calculo1.classList.remove('hidden');
  calculo2.classList.remove('hidden');

  chequearPromptInput();
};

const stopGame = function () {
  tiempo1.classList.add('hidden');
  tiempo2.classList.add('hidden');
  calculo1.classList.add('hidden');
  calculo2.classList.add('hidden');
};

start.addEventListener('click', function () {
  startGame();
});

stop.addEventListener('click', function () {
  stopGame();
});

let eleccionDeTiempo = prompt(
  'Determinar el tiempo(en segundos), entre 1 y 5, que quieren que pase entre el turno del primer jugador y el turno del segundo:'
);

const chequearPromptInput = function () {
  if (eleccionDeTiempo >= 1 && eleccionDeTiempo <= 5) {
    console.log('Es un numero entre 1 y 5!');
  } else if (eleccionDeTiempo !== eleccionDeTiempo >= 1) {
    while (
      eleccionDeTiempo != 1 &&
      eleccionDeTiempo != 2 &&
      eleccionDeTiempo != 3 &&
      eleccionDeTiempo != 4 &&
      eleccionDeTiempo != 5
    ) {
      alert('Escribir un numero(entero) entre 1 y 5');
      eleccionDeTiempo = prompt(
        'Determinar el tiempo (en segundos) que quieren que pase entre el turno del primer jugador y el turno del segundo:'
      );
    }
  }
};
