'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var sum = 0;
  for(var i=0;i<collection.length; i++){
    collection[i] = collection[i] * 3 + 2;
    sum += collection[i]
  }
  return sum;
}

module.exports = hybrid_operation;

