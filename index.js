
import Gen from './lib/gen';
import five from './data/five.json'
import four from './data/four.json'
import fs from 'fs';


// let gen = new Gen(five, 5);
let gen = new Gen(four, 4);


gen.generate();
console.log(gen.results.length, 'results');
fs.writeFileSync('output.json', JSON.stringify(gen.results, null, 2));
