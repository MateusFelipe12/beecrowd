var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let DiferencaXY = Number(lines.shift());

console.log(`${DiferencaXY * 2} minutos`);