'use strict';

function even_to_letter(collection) {
  var character = "abcdefghijklmn";
  var result = [];
  for(var i=0;i<collection.length; i++){
      if(collection[i] % 2  === 0){
        result.push(character[ collection[i] -1 ])
      }
  }
  return result;
}

module.exports = even_to_letter;
