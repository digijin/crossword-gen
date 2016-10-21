
import Gen from './lib/gen';
import words from './data/five.json'
import fs from 'fs';


let gen = new Gen(words, 5);


gen.generate();
fs.writeFileSync('output.json', JSON.stringify(gen.results, null, 2));
