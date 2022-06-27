var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = Number(lines.shift());
let velMedia = Number(lines.shift());

console.log(`${(tempo * velMedia / 12).toFixed(3)}`);