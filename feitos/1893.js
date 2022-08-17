var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => (a));

let [a, b ] = pegarValores(lines.shift())

if (a> b) {
  if (b >= 97 ) {
    console.log("cheia");
  }else if(b >2){
    console.log("minguante");
  }else{
    console.log("nova");
  }
}else{
  if (b >= 97) {
    console.log("cheia");
  }else if(b> 2){
    console.log("crescente");
  }else{
    console.log("nova");
  }
}