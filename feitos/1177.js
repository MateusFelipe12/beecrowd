var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let valor = Number(lines.shift());
let index = 0;
let vetor = [];
let i = 0;

while(index < 1000){
  while (i < valor) {
    vetor[index] = i;
    index++;
    i++
  }
  i = 0;
}

for(let index = 0; index < 1000; index++){
  console.log(`N[${index}] = ${vetor[index]}`);
}