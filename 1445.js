var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => (a));

let cont = Number(lines.shift())
while(cont){
  let convidados = 0
  let array = [];
  (pegarValores(lines.shift())).forEach(num => {
    array.push((num.replace(/\D/g, '')).split(''));
  });
  console.log(cont);
  console.log(array);

  
  cont = Number(lines.shift())
}
// 1445