var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let linhas = lines.shift();

for (let i = 1; linhas; i++) {
    console.log(`${i} ${++i} ${++i} PUM`);
    i++;
    linhas--
}