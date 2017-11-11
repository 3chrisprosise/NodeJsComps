'use strict';

function compute_median(collection) {
  //在这里写入代
  if(collection.length %2 !== 0){
    return collection[Math.floor(collection.length/2)]
  }else if(collection.length >= 5){
    return (parseInt(collection[collection.length/2]) +parseInt(collection[collection.length/2+1]))/2
  }else {
    return (parseInt(collection[collection.length/2]) + parseInt(collection[collection.length/2-1]))/2
  }
}

module.exports = compute_median;


