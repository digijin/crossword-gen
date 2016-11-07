
import Gen from './lib/gen';
// import five from './data/five.json'
// import four from './data/four.json'
import fs from 'fs';


import five from './data/commonfive.json'

//randomise
// five.sort(() => {return Math.random()-0.5})

let gen = new Gen(five, 5);

// import test from './data/test.json'
// let gen = new Gen(test, 4);


gen.generate();
console.log(gen.results.length, 'results');
fs.writeFileSync('output.json', JSON.stringify(gen.results, null, 2));

//
// import wordcount from './util/wordcount';
// wordcount(five, 'wordcountfive-1.json', 6400)
