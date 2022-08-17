var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => parseFloat(a));

let n = Number(lines.shift());
let cont = 0;

while( cont < n ){
  let num = Number(lines.shift());
  console.log(`${ num === 0 ? 'NULL' : num % 2 == 0 ? num > 0 ? 'EVEN POSITIVE' : 'EVEN NEGATIVE' : num > 0 ? 'ODD POSITIVE' : 'ODD NEGATIVE' }`)
    cont++;
}