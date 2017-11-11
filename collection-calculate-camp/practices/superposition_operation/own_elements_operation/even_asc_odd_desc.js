'use strict';
var even_asc_odd_desc = function(collection){
  var mid_even = [];
  var mid_odd = [];
  var result = [];
  for(var j = 0;j <collection.length ; j++){
    if(collection[j] % 2){
      mid_odd.push(collection[j]);
    }else {
      mid_even.push(collection[j]);
    }
  }

  mid_even.sort(function (a, b) {
    return a-b;
  });
  mid_odd.sort(function (a, b) {
    return b-a;
  });
  result = mid_even.concat(mid_odd);
  return result;
};
module.exports = even_asc_odd_desc;
