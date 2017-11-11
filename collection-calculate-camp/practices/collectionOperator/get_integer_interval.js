'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];

  if(number_b > number_a){
    for(var i = number_a;i <= number_b;i ++){
      result.push(i);
    }
  }
  if(number_b < number_a){
    for(var j = number_a;j >= number_b;j --){
      result.push(j);
    }
    return result;
  };
  if(number_a == number_b){
    result.push(number_b);
    return result;
  }

  return result;
}

module.exports = get_integer_interval;

