var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


//funçoes
const pegarValores = (line) => line.split(" ").map(a => Number(a));

//declarando variaveis

let QtdSit = Number(lines.shift());
let estrelas = pegarValores(lines.shift());
let SitioRoubado = 0;
let roubos = 0;
let Continuar = true;
let avanca = true;
let TCarneiros = 0;
let CopiaEstr = [];

for (let i = 0; i < estrelas.length; i++) {
    TCarneiros += estrelas[i];
    CopiaEstr[i] = estrelas[i];  
}

//laços principal
let i = 0;
while(Continuar) {
    estrelas[i] == CopiaEstr[i] ? SitioRoubado++ : 0;
    avanca = (estrelas[i] % 2 != 0);
    if (estrelas[i] > 0) {
        estrelas [i] = estrelas[i] - 1;
        roubos++;
    }
    avanca ? i++ : i--;
    Continuar = (i == QtdSit) ? false : (i < 0) ? false : true; 
}

let sobrou = TCarneiros - roubos;

console.log(`${SitioRoubado} ${sobrou}`);