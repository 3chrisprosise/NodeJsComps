'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  for(var i =0; i< collection.length; i++){
    if(!result[collection[i].toString()]){
      result[collection[i].toString()] = 0;
    }
    result[collection[i].toString()] = result[collection[i].toString()] + 1;
  }
  return result;
}

module.exports = grouping_count;
