var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let candidatos = lines.shift()
let a = null
let maior = 0
let posicao =null
let contador = 1
while(a=Number(lines.shift())){
  if(a > maior){
    maior = a
    posicao = contador
  }
  contador++
}

if(posicao == 1){
  console.log("S");
}else{
  console.log("N");
}