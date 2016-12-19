import Gen from '../lib/gen'
import fs from 'fs'

console.log("thread starting");

let word = process.argv[2];
let file = process.argv[3];

let words = require('../data/'+file+'.json');

// console.log(word, file);
let gen = new Gen(words, 5);


// gen.generate();
// console.log(gen.results.length, 'results');

if(!fs.existsSync('./out')) fs.mkdirSync('./out');

let path = './out/'+file+'/'
if(!fs.existsSync(path)) fs.mkdirSync(path);

let filename = path+word+'.json';

if(fs.existsSync(filename)){
  console.log("skipping", word);
}else{
  gen.recurse([word],[])
  fs.writeFileSync(filename, JSON.stringify(gen.results, null, 2));
}
