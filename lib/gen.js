export default class Gen{
  constructor(words, width, height){
    this.words = words;
    this.width = width;
    this.height = height;

    //choose a random starting words
    let start = "CROSS" //TODO: proper


    let across = [start]
    let down = []



  }

  generate(){
    this.findNextMatchingDown(across, down)
  }

  recurse(across, down){
    let matching = this.findNextMatchingDown(across, down);
    // if(matching.length === 0){
    //   return false;
    // }
    console.log("++SUCCESS++");
    if(across.length===5){
      console.log(across[0]);
      console.log(across[1]);
      console.log(across[2]);
      console.log(across[3]);
      console.log(across[4]);
    }
    matching.forEach((match) => {
      this.recurse(down.concat([match]), across);
    })
  }


  findNextMatchingDown(across, down){
    let matching = [];
    let col = down.length;
    // console.log(down, down.length, col);
    this.words.forEach((word) => {
      // console.log(word);
      for(let row = 0; row< across.length; row++){
        let letter = across[row].substr(col, 1); //letter in that slot
        // console.log(col, row, 'is', letter, "vs", word[row]);
        if(word[row] !== letter){
          // console.log("failed");
          return;
        }
      }
      matching.push(word);
    });

    return matching;

    // console.log(matching.length, "matches for down", col);
    // if(matching.length === 0){
    //   return false;
    // }
    // // console.log(matching);
    // if(col+1 >= this.width){
    //   // console.log("DONE", across, down);
    //   console.log("hit width limit");
    // }else{
    //   let i = 0;
    //   let result = false;
    //   do{
    //     let word = matching[i++];
    //     console.log("attempt", i, "trying", word);
    //     result = this.findNextMatchingAcross(across, down.concat([word]))
    //   }while(!result && i < matching.length)
    // }
    // console.log(across, down);
    // return true;

  }


  //
  // findNextMatchingAcross(across, down){
  //   // console.log(across, down);
  //   let matching = [];
  //   let row = across.length;
  //   this.words.forEach((word) => {
  //     for(let col = 0; col< down.length; col++){
  //       // console.log(across, down);
  //       let letter = down[col].substr(row, 1)
  //       if(word[col] !== letter){
  //         return;
  //       }
  //     }
  //     matching.push(word);
  //   })
  //   console.log(matching.length, "matches for across", row);
  //   if(matching.length === 0){
  //     console.log("no matches, returning");
  //     return false
  //   }
  //
  //   if(row+1 >= this.height){
  //     console.log("hit height limit");
  //     // console.log("DONE", across, down);
  //   }else{
  //     let i = 0;
  //     let result = false;
  //     do{
  //       let word = matching[i++];
  //       console.log("attempt", i, "trying", word);
  //       result = this.findNextMatchingDown(across.concat([word]), down)
  //     }while(!result && i < matching.length)
  //   }
  //
  //   console.log(across, down);
  //
  //   // this.findNextMatchingDown(across.concat([matching[0]]), down)
  //   return true;
  //
  // }

}
