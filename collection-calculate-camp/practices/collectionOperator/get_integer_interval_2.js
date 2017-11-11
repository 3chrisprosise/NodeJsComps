'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a === number_b && (number_a % 2 === 0)){
    result.push(number_a);
    return result;
  }
  if(number_b > number_a){
    for(var i = number_a;i<=number_b ;i ++){
      if(i % 2 === 0){
        result.push(i);
      }
    }
    return result;
  }else if(number_b < number_a){
    for(var j = number_a;j>=number_b ;j --){
      if(j % 2 === 0){
        result.push(j);
      }
    }
    return result
  }else {
    return result;
  }

}

module.exports = get_integer_interval_2;
