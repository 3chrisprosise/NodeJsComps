'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  for(var j = 0;j<collection.length;j++){
    if(!collection[j].length){
      result.push(collection[j]);
    }else {
      for(var i=0;i<collection[j].length;i++){
        result.push(collection[j][i])
      }
    }

  }
 return result;
}

module.exports = double_to_one;
