var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let Nota1 = parseFloat(lines.shift());
let Nota2 = parseFloat(lines.shift());

console.log(`MEDIA = ${((Nota1 * 0.35 + Nota2 * 0.75)/1.1).toFixed(5)}`);