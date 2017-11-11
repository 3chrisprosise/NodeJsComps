'use strict';
var number_map_to_word = function(collection){
  var result = [];
  var characters = "abcdefghijklmnopqrstuvwxyz";
  function getchar(number) {
    if(number <= 26){
      return characters[number-1];
    }else if(number>26){
      return characters[Math.floor(number/26.5)-1] + characters[number%26-1<0?25:number%26-1]
    }
  }
  for(var i =0;i<collection.length;i++){
    result.push(getchar(collection[i]))
  }
  return result;
};

module.exports = number_map_to_word;
