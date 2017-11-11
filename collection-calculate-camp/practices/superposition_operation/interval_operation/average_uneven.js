'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum = 0;
  var count = 1;
  for(var i=0; i<collection.length;i++){
    if(i % 2){
      sum += collection[i];
      count ++;
    }
  }
  console.log(sum);
  return sum/count;
}

module.exports = average_uneven;
