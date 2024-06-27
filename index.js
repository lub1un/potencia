const prompt = require('prompt-sync')();

let base = prompt("Qual é a base da potencia?: ")
let expoente = prompt("Qual é o expoente?: ")

base = parseFloat(base);
expoente = parseFloat(expoente);

let resultado = Math.pow(base, expoente)

console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}`);
