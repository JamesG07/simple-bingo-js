import {
  getAllNumbers,
  templatePlayer,
  containerNumbersPlayer,
  containerNumbersPc,
  templatePc,
  btnNewNumber,
  results,
} from './utils.js';

let arrayNumbersPlayer = [];
let arrayNumbersPc = [];
let arrayNumbers = [];
let arrayNumbersContainer = [];

window.addEventListener('DOMContentLoaded', () => {
  allNumbersPlayer();
  allNumbersPc();
  printNumbers();
});

btnNewNumber.addEventListener('click', () => {
  let number = numeroAleatorioSinRepetir(arrayNumbers);

  const div = document.createElement('div');
  const parrafo = document.createElement('p');
  parrafo.textContent = number;
  div.appendChild(parrafo);
  results.appendChild(div);
  btnNewNumber.textContent = number;
  arrayNumbersContainer.push(number);
  findNumberInArrays(number);
  removeNumberContainer(number);
});

const findNumberInArrays = (num) => {
  let resArrayPc = arrayNumbersPc.findIndex((elment) => elment === num);
  if (resArrayPc >= 0) {
    arrayNumbersPc.splice(resArrayPc, 1);
  }
  let resArrayPlayer = arrayNumbersPlayer.findIndex((elment) => elment === num);
  if (resArrayPlayer >= 0) {
    arrayNumbersPlayer.splice(resArrayPlayer, 1);
  }

  if (arrayNumbersPc.length === 0) {
    containerNumbersPc.querySelector('span').classList.remove('inactive');
    btnNewNumber.disabled = true;
    btnNewNumber.textContent = 'Finaliza el juego';
  } else if (arrayNumbersPlayer.length === 0) {
    containerNumbersPlayer.querySelector('span').classList.remove('inactive');
    btnNewNumber.disabled = true;
    btnNewNumber.textContent = 'Finaliza el juego';
  }
};

const removeNumberContainer = (num) => {
  let numero = num.toString();
  const nodoPlayer = containerNumbersPlayer.getElementsByClassName(
    `numero-${numero}`
  );
  if (nodoPlayer.length > 0) {
    let nodo = nodoPlayer[0];
    nodo.classList.add('checked');
  }
  const nodoPc = containerNumbersPc.getElementsByClassName(`numero-${numero}`);
  if (nodoPc.length > 0) {
    let nodo = nodoPc[0];
    nodo.classList.add('checked');
  }
};

const allNumbersPlayer = () => {
  arrayNumbersPlayer = getAllNumbers();
  const fragment = document.createDocumentFragment();
  arrayNumbersPlayer.forEach((num) => {
    const clone = templatePlayer.cloneNode(true);
    clone.querySelector('p').textContent = num;
    clone.querySelector('p').setAttribute('class', `numero-${num}`);
    fragment.appendChild(clone);
  });
  containerNumbersPlayer.appendChild(fragment);
};
const allNumbersPc = () => {
  arrayNumbersPc = getAllNumbers();
  const fragment = document.createDocumentFragment();
  arrayNumbersPc.forEach((num) => {
    const clone = templatePc.cloneNode(true);
    clone.querySelector('p').textContent = num;
    clone.querySelector('p').setAttribute('class', `numero-${num}`);
    fragment.appendChild(clone);
  });
  containerNumbersPc.appendChild(fragment);
};

const printNumbers = () => {
  for (let i = 1; i <= 90; i++) {
    arrayNumbers.push(i);
  }
};

const numeroAleatorioSinRepetir = (array) => {
  let longitud = array.length;
  if (longitud === 0) {
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * longitud);

  let numeroAleatorio = array[indiceAleatorio];
  array.splice(indiceAleatorio, 1);
  return numeroAleatorio;
};
