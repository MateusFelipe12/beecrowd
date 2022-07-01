var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift());
let i = 1;

while (i <= a) {
    if(i % 2 == 0){
        console.log(`${i}^2 = ${i*i}`);
    }
    i++;
}