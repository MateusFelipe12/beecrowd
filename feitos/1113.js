var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
let a, b = 1;

while (a != b) {
[a, b] = pegarValores(lines.shift());
let result = a > b ? 'Decrescente': a < b ? 'Crescente': false
    result ? console.log(`${result}`): console.log();; 
}