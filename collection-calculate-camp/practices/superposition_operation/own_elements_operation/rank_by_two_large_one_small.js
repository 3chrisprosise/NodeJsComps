'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort(function (next, now) {
    return next - now;
  });
  console.log(collection);
  for(var i =0;i<collection.length;i++){
    if(!((i+1)%3) && i!== 0){
      var i_1 = collection[i-2];
      var i_2 = collection[i-1];
      var i_3 = collection[i];
      collection[i-2] = i_2;
      collection[i-1] = i_3;
      collection[i] = i_1;
    }
  }
  return collection

}
module.exports = rank_by_two_large_one_small;
