'use strict';
var rank_asc = function(collection){
  for(var i =0;i<collection.length;i++){
    for(var j =i+1;j<collection.length;j++){
      if(collection[j]>collection[i]){
        var t;
        t = collection[j];
        collection[j] = collection[i];
        collection[i] = t;
      }
    }
  }
  return collection;
};

module.exports = rank_asc;
