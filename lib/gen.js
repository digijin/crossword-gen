import readline from 'readline';
import fs from 'fs';

let spinner = 0;

export default class Gen{
  constructor(words, wordlength){
    this.words = words;
    this.wordlength = wordlength;
    this.results = []
  }
  generate(){
    console.log("Generating...");
    this.recurse([], [])
  }
  recurse(across, down){

    let matching = this.findNextMatchingDown(across, down);

    // if(across[0] && Math.random()<0.01)
    if(spinner++ > 10000){
      spinner = 0;

      let prog = across.length + down.length;
      let progLeft = (this.wordlength*2) - prog;
      readline.cursorTo(process.stdout, 0)
      let str = '['+Array(prog).join('=')+Array(progLeft).join(' ')+'] ';
      str += this.results.length + ' Matches found. Current root: ' + across[0];
      process.stdout.write(str);
    }

    if(across.length===this.wordlength && down.length===this.wordlength){
      console.log("++SUCCESS++");
      across.forEach((a)=> {console.log(a)})
      console.log('-------');
      this.results.push(across);
      fs.writeFileSync('output.json', JSON.stringify(this.results, null, 2)); //constant flush
    }

    matching.forEach((match) => {
      this.recurse(down.concat([match]), across);
    });
  }
  findNextMatchingDown(across, down){
    let matching = [];
    let col = down.length;
    this.words.forEach((word) => {
      if(across.indexOf(word)>-1 || down.indexOf(word)>-1) return;
      for(let row = 0; row< across.length; row++){
        let letter = across[row].substr(col, 1); //letter in that slot
        if(word[row] !== letter){
          return;
        }
      }
      matching.push(word);
    });
    return matching;
  }
}
