'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var character = " abcdefghigklmnopqrstuvwxyz";
  var result = [];
  if(number_a < number_b){
    for(var i =number_a;i<=number_b;i++){
      result.push(character[i]);
    }
    return result;
  }else if(number_b == number_a){
    result.push(character[number_a]);
    return result;
  }else if(number_a > number_b){
    for(var j =number_a;j>=number_b;j--){
      result.push(character[j]);
    }
    return result;
  }

}
module.exports = get_letter_interval;
