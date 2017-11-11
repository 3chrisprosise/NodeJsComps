'use strict';
var calculate_median = function(collection){
  if(collection.length % 2){
    return collection[Math.ceil(collection.length / 2) -1 ];
  }else {
    return collection[Math.ceil(collection.length) / 2];
  }
};
module.exports = calculate_median;
