var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [hora1, min1, hora2, min2] = pegarValores(lines.shift());
let hMin1 = hora1 * 60 + min1;
let hMin2 = hora2 * 60 + min2;
let tJogo = hMin1 > hMin2 ? hMin2 - hMin1 + 1440 : hMin1 < hMin2 ? hMin2 - hMin1 : 1440;
let horas = 0;

while(tJogo >= 60){
    horas++;
    tJogo -= 60;
}


console.log(`O JOGO DUROU ${horas} HORA(S) E ${tJogo} MINUTO(S)`);
