'use strict';
function map_to_even(collection){
  var result = [];
  for(var i = 0; i<collection.length;i++){
    result.push(2*collection[i]);
  }
  return result;
}
module.exports = map_to_even;
