'use strict';
var single_element = function(collection){
  var result = [];
  var mid_result = [];
  var value_count = [];
  for(var i=0;i<collection.length; i++){
    if((i%2) && (i!== 0)){
      mid_result.push(collection[i]);
    }
  }
  for(var i=0 ;i<mid_result.length; i++){
    if( mid_result.lastIndexOf(mid_result[i]) === mid_result.indexOf(mid_result[i])){
      // if(collection.lastIndexOf(mid_result[i]) === collection.indexOf(mid_result[i])){
        result.push(mid_result[i]);
      // }

    }
  }

  return result;
};
module.exports = single_element;
