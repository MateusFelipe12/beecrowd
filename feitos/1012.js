var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let vet = [a, b, c] = pegarValores(lines.shift());

console.log(`TRIANGULO: ${(a * c / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(c * c * 3.14159).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((a + b) * c) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(b * b).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);