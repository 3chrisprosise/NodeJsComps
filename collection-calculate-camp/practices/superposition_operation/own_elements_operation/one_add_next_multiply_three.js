'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  for(var i =0;i<collection.length-1;i++){
    result.push((collection[i+1] +collection[i]) * 3) ;
  }
  return result;
}
module.exports = one_add_next_multiply_three;
