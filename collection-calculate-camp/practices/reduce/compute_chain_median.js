'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var result = 0;
  var numbers = collection.split("->");
  result = parseInt(numbers[numbers.length/2 + 1])+parseInt(numbers[numbers.length/2]);
  return result/2
}

module.exports = compute_chain_median;
