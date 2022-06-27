var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());
let D = Number(lines.shift());

console.log(`DIFERENCA = ${(A * B - C * D)}`);