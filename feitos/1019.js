var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let segundos = Number(lines.shift());
let horas = 0
let minutos = 0;

horas = parseInt(segundos / 3600);
minutos =  parseInt((segundos / 60) - (horas * 60));
segundos = parseInt(segundos - ((horas * 3600) + (minutos * 60)));

console.log(`${(horas).toFixed(0)}:${(minutos).toFixed(0)}:${(segundos).toFixed(0)}`);