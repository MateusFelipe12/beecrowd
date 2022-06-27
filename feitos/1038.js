var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let compra = [cod, qtd] = //pegarValores(lines.shift());

console.log(`Total: R${cod == 1 ? qtd * 4 : cod === 2 ? qtd * 4.5 : cod === 3 ? qtd * 5 : cod === 4 ? qtd * 2 : qtd * 1.5 }`) 