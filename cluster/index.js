import cp from 'child_process'

let file = process.argv[2];
let clusters = process.argv[3]||3;

console.log("clustering", file);

let words = require('../data/'+file+'.json').sort(() => {return Math.random()-.05});
let i = 0;

function spawn(){
  let word = words[i++];
  if(word){
    let ps = cp.fork('./cluster/process', [word, file])
    ps.on('close', (code) => {
      console.log("thread closed", code);
      spawn();
    });
  }
}

for(let x=0;x<clusters; x++){spawn();}

// spawn();
// spawn();
// spawn();
// spawn();


console.log("cluster started");
