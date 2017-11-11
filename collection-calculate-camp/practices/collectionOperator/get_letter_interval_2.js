'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var character = "abcdefghijklmnopqrstuvwxyz";
  var result = [];
  function getchar(number) {
    if(number <= 26){
      return character[number-1];
    }else if(number>26){

      return character[Math.floor(number/26.5)-1] + character[number%26-1<0?25:number%26-1]
    }
  }
  if(number_b === number_a){
    result.push(getchar(number_b));
    return result;
  }else if(number_a < number_b){
    for(var i =number_a;i<=number_b;i++){
      result.push(getchar(i));
    }
    console.log(result);
    return result;
  }else {
    for(i=number_a ;i >= number_b; i--){
      result.push(getchar(i));
    }
    console.log(result);
    return result;
  }
}

module.exports = get_letter_interval_2;

