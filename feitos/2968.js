var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => (a));

let [a, b] = pegarValores(lines.shift())

let total = a*b
let response =[]

for (let i = 10; i <= 90; i+= 10) {
  response.push(Math.ceil(total*(i/100)))
}
console.log(response.join(" "));