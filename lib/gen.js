export default class Gen{
  constructor(words, width, height){
    this.words = words;
    this.width = width;
    this.height = height;

    //choose a random starting words
    let start = "CROSS" //TODO: proper


    let across = [start]
    let down = []

    this.findNextMatchingDown(across, down)

  }


  findNextMatchingDown(across, down){
    let matching = [];
    let col = down.length;
    // console.log(down, down.length, col);
    this.words.forEach((word) => {
      for(let row = 0; row< across.length; row++){
        let letter = across[row].substr(col, 1); //letter in that slot
        if(word[col] !== letter){
          return;
        }
      }
      matching.push(word);
    });

    console.log(matching.length, "matches for down", col);
    // console.log(matching);
    if(col+1 >= this.width){
      // console.log("DONE", across, down);
    }else{
      let word = matching[0]
      let result = this.findNextMatchingAcross(across, down.concat([word]))
      if(!result){
        word = matching[1]
        this.findNextMatchingAcross(across, down.concat([word]))
      }
    }


    // return down.concat([matching[0]])
  }

  findNextMatchingAcross(across, down){
    // console.log(across, down);
    let matching = [];
    let row = across.length;
    this.words.forEach((word) => {
      for(let col = 0; col< down.length; col++){
        // console.log(across, down);
        let letter = down[col].substr(row, 1)
        if(word[col] !== letter){
          return;
        }
      }
      matching.push(word);
    })
    console.log(matching.length, "matches for across", row);
    if(matching.length === 0){
      return false
    }
    this.findNextMatchingDown(across.concat([matching[0]]), down)

  }

}
