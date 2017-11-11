'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var status = true;
  if(collection_a.length !== collection_b.length) status = false;
  for(var i =0;i<collection_a.length;i++){
    if(collection_b[i] !== collection_a[i]){
      status = false
    }
  }
  return status
}

module.exports = compare_collections;


