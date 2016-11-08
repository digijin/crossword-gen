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
gen.recurse([word],[])
if(!fs.existsSync('./out')) fs.mkdirSync('./out');
let path = './out/'+file+'/'
if(!fs.existsSync(path)) fs.mkdirSync(path);
fs.writeFileSync(path+word+'.json', JSON.stringify(gen.results, null, 2));
