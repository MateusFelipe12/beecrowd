var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => Number(a));

const muralhas = lines.shift().split(" ")[1]
let titas = lines.shift()
let [P, M, G] = pegarValores(lines.shift())
titas = titas.split('').map(t => t == 'P' ? P : t == 'M' ? M : G )
let arrayMuralhas = []
let muralhaAtual = 0
arrayMuralhas.push(muralhas)

while (titas.length) {
  if (titas[0] > arrayMuralhas[muralhaAtual]) {
    if(!arrayMuralhas[muralhaAtual +1 ]){
      arrayMuralhas.push(muralhas)
    }
    muralhaAtual++
  }else{
    arrayMuralhas[muralhaAtual] -= titas[0]
    titas.shift()
    muralhaAtual = 0
  }
}

console.log(arrayMuralhas.length);

