'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var max = 0;
  for(var i = 0;i<collection.length;i++){
    if(collection[i]>max){
      max = collection[i]
    }
  }
  return max;
}

module.exports = collect_max_number;
