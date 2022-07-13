var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));

const aguia = 'aguia';
const pomba = 'pomba';
const homem = 'homem';
const vaca = 'vaca';
const pulga = 'pulga';
const lagarta = 'lagarta';
const sanguessuga = 'sanguessuga';
const minhoca = 'minhoca';
let familia = lines.shift();
let grupo = lines.shift();
let classe = lines.shift();

console.log(`${familia === 'vertebrado'
    ? grupo === 'ave'
        ? classe === 'carnivoro'
            ? aguia 
            : pomba 
        : classe === 'onivoro'
            ? homem
            : vaca
    : grupo === 'inseto'
        ? classe === 'hematofago'
            ? pulga
            : lagarta
        : classe === 'hematofago'
            ? sanguessuga
            : minhoca}`);