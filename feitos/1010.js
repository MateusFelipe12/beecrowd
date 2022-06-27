var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
let produto1 = [Cod1, qtd1, val1] = pegarValores(lines.shift());
let produto2 = [cod2, qtd2, val2] = pegarValores(lines.shift());

let total  = (qtd1 * val1 + qtd2 * val2);

console.log(`VALOR A PAGAR: R$ ${(total).toFixed(2)}`);