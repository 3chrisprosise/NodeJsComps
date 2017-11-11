'use strict';

function median_to_letter(collection) {
  var result = [];
  var characters = "abcdefghijklmnopqrstuvwxyz";
  function getchar(number) {
    if(number <= 26){
      return characters[number-1];
    }else if(number>26){
      return characters[Math.floor(number/26.5)-1] + characters[number%26-1<0?25:number%26-1]
    }
  }
  return getchar(collection[Math.ceil(collection.length / 2)]);
  //在这里写入代码
}

module.exports = median_to_letter;
