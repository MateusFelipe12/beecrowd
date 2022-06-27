var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = parseInt(lines.shift());
console.log(`VOLUME = ${((4.0/3) * 3.14159 * raio * raio * raio).toFixed(3)}`);