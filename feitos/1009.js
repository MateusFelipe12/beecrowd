var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift()
let salario = parseFloat(lines.shift());
let Vendas = parseFloat(lines.shift());

console.log(`TOTAL = R$ ${(salario + (Vendas * 0.15)).toFixed(2)}`);