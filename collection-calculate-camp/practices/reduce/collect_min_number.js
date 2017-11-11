'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var min = 999;
  for(var i = 0;i<collection.length;i++){
    if(collection[i]<min){
      min = collection[i]
    }
  }
  return min;
}

module.exports = collect_min_number;

