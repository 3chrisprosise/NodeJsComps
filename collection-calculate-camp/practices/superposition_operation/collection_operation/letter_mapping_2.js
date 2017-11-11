'use strict';

function average_to_letter(collection) {
  var character = "abcdefghigklmn";
  var sum =0;
  for(var i=0;i<collection.length; i++){
    sum += collection[i];
  }
  var average = sum / collection.length;
  return character[Math.ceil(average) - 1];
  //在这里写入代码
}

module.exports = average_to_letter;

