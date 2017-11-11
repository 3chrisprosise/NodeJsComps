'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  var all_array = collection_a.concat(collection_b);
  if(result.length === 0){
    result[0] = collection_a[0];
  }
  for(var i = 0;i <all_array.length;i++){
    for(var j =0;j<result.length;j++){
      if(result[j] === all_array[i]){
        break;
      }
    }
    if(all_array[i] !== result[j]){
      result.push(all_array[i]);
    }
  }
  console.log(result);
  return result
}

module.exports = get_union;

