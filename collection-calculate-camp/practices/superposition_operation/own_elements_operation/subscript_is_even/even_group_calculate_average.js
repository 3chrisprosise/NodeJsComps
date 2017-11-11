'use strict';
var even_group_calculate_average = function(collection){
  var mid_result = [];
  var result = [];
  for(var i=0;i<collection.length; i++){
    if( (i%2 !== 0) && (collection[i] %2 === 0 )){
      mid_result.push(collection[i]);
    }
  }
  if(mid_result.length === 0){
    return [0];
  }else {
    var average = [];
    average[0] = 0; average[1] = 0; average[2] = 0;
    var sum = [];
    sum[0]= 0;sum[1]= 0;sum[2]= 0;
    var count = [];
    count[0] = 0; count[1] = 0; count[2] = 0;
    for(var j =0;j<mid_result.length; j++){
      if(mid_result[j].toString().length === 1){
        sum[0] += mid_result[j];
        count[0] ++;
      }else if (mid_result[j].toString().length === 2){
        sum[1] += mid_result[j];
        count[1] ++;
      }else {
        sum[2] += mid_result[j];
        count[2] ++;
      }
    }
    for(var i = 0;i<3;i++){
      if(sum[i] !== 0){
        result.push(sum[i] / count[i]);
      }
    }
  }
  return result;
};
module.exports = even_group_calculate_average;
