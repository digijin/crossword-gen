import request from 'request-promise'
import co from 'co'
import fs from 'fs'

let baseurl = 'http://www.wordcount.org/dbquery.php?method=SEARCH_BY_NAME&toFind='

export default function wordcount(words, filename, offset=0){
  console.log("running wordcount");

  co(function* (){
    let output = []
    for(let i = offset; i< words.length; i++){
      let word = words[i];
      let result = yield request(baseurl+word);
      result = result.substr(11, 1)==='y';

      console.log(word, result);

      if(result){
        output.push(word);
        //this line is a waste of time but its good for me.
        fs.writeFileSync(filename, JSON.stringify(output, null, 2))
      }
    }
    fs.writeFileSync(filename, JSON.stringify(output, null, 2))
  })
}
