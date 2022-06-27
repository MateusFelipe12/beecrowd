var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let maiorNum = Number(lines.shift());

for (let i = 0; i <= maiorNum; i++) {
    i % 2 != 0 ? console.log(i) : null;
}