import request from 'request-promise'
import co from 'co'
import fs from 'fs'

let baseurl = 'http://www.wordcount.org/dbquery.php?method=SEARCH_BY_NAME&toFind='

export default function wordcount(words, filename){
  console.log("running wordcount");

  co(function* (){
    let output = []
    for(let i = 0; i< words.length; i++){
      let word = words[i];
      console.log(word);
      let result = yield request(baseurl+word);
      if(result.substr(11, 1)==='y'){
        output.push(word);
      }
    }
    fs.writeFileSync(filename, JSON.stringify(output, null, 2))
  })
}
