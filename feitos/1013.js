var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let vet = [a, b, c] = pegarValores(lines.shift());
let aux = 0;

if(a < b){
    aux = a;
    a = b;
    b = aux;
}
if(b < c){
    aux = c;
    c = b;
    b = aux;
}
if(a < b){
    aux = a;
    a = b;
    b = aux;
}
console.log(`${a} eh o maior`);