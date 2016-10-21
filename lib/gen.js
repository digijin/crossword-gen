export default class Gen{
  constructor(words, wordlength){
    this.words = words;
    this.wordlength = wordlength;
  }

  generate(){
    this.recurse([], [])
  }

  recurse(across, down){
    let matching = this.findNextMatchingDown(across, down);
    if(across.length===this.wordlength){
      console.log("++SUCCESS++");
      across.forEach((a)=> {console.log(a)})
    }
    matching.forEach((match) => {
      this.recurse(down.concat([match]), across);
    });
  }

  findNextMatchingDown(across, down){
    let matching = [];
    let col = down.length;
    this.words.forEach((word) => {
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
