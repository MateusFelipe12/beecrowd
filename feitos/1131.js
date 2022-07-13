var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let continuar = 1;
let vitInter = 0;
let vitGremio = 0;
let empate = 0;
let i = 0
while(continuar === 1){
    let [inter, gremio] = pegarValores(lines.shift());
    inter > gremio 
        ? vitInter++
        : gremio > inter
            ? vitGremio++
            : empate++;
    console.log(`Novo grenal (1-sim 2-nao)`);
    continuar = Number(lines.shift());
    i++;
}
console.log(`${i} grenais
Inter:${vitInter}
Gremio:${vitGremio}
Empates:${empate}
${vitInter > vitGremio ? 'Inter venceu mais': vitGremio > vitInter ? 'Gremio venceu mais' : 'Nao houve vencedor'}`);
