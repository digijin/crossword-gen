import cp from 'child_process'

let file = process.argv[2];

console.log("clustering", file);

let words = require('../data/'+file+'.json');

let word = words[0];
let ps = cp.fork('./cluster/process', [word, file])
ps.on('close', (code) => {
  console.log("closed", code);
})
//
// word = words[1];
// cp.fork('./cluster/process', [word, file])
//
// word = words[2];
// cp.fork('./cluster/process', [word, file])


console.log("clusterdone");
