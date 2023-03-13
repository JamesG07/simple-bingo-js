export function getAllNumbers() {
  let obj = {};
  for (let i = 1; Object.values(obj).length < 15; i++) {
    let random = Math.floor(Math.random() * (90 - 1 + 1) + 1);
    if (!obj[random]) {
      obj[random] = random;
    }
  }
  const array = Object.values(obj);
  return array;
}

const templatePlayer = document.getElementById('templateNumbersPlayer').content;
const templatePc = document.getElementById('templateNumbersPc').content;
const templateResults = document.getElementById('templateResults').content;
const containerNumbersPlayer = document.getElementById('numbersPlayer');
const containerNumbersPc = document.getElementById('numbersPc');
const results = document.getElementById('results');
const btnNewNumber = document.getElementById('btnNewNumber');
export {
  templatePlayer,
  containerNumbersPlayer,
  templatePc,
  containerNumbersPc,
  results,
  btnNewNumber,
  templateResults,
};
