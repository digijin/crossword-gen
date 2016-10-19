export default class Gen{
  constructor(words, width, height){
    this.words = words;
    console.log("creating");

    //choose a random starting words
    let start = "CROSS" //TODO: proper


    let across = [start]
    let down = []

    this.findNextMatchingDown(across, down)

  }

  findNextMatchingDown(across, down){
    let matching = [];
    let col = down.length;
    this.words.forEach((word) => {
      for(let row = 0; row< across.length; row++){
        let letter = across[row].substr(col, 1);
        if(word[col] === letter){
          //console.log(word);
          //good so far
        }else{
          return;
        }
      }
      matching.push(word);
    })
    // console.log(matching);
    this.findNextMatchingAcross(across, down.concat([matching[0]]))
  }

  findNextMatchingAcross(across, down){
      let matching = [];
      console.log(across, down);
  }

}
