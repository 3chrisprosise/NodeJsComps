'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];
  for(var i =0;i<collection.length; i++){
    if(result.length === 0){result.push(collection[i])}
    else {
      for(var j = 0;j< result.length;j++){
        if(result[j] === collection[i]){
          break
        }
      }
      if(result[j] !== collection[i]){
        result.push(collection[i]);
      }
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
