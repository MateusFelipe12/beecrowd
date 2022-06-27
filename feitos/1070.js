var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let maiorNum = Number(lines.shift());
let impares = 0;
for (let i = maiorNum; impares < 6 ;i++) {
    if (i % 2 != 0){
        console.log(`${i}`);
        impares++;
    }
}