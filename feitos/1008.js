var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let NFunc = Number(lines.shift());
let horas = parseFloat(lines.shift());
let ValorHr = parseFloat(lines.shift());

console.log(`NUMBER = ${NFunc}`);
console.log(`SALARY = U$ ${(horas * ValorHr).toFixed(2)}`);