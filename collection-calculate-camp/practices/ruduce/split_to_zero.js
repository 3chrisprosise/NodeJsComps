'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  var i = number.toFixed(1);
  result.push(parseFloat(parseFloat(i).toFixed(1)));
  do{
    i-=parseFloat(interval.toFixed(1));
    result.push(parseFloat(parseFloat(i).toFixed(1)));
  }while (parseFloat(parseFloat(i).toFixed(1)) > 0);
  return result;
}

module.exports = spilt_to_zero;
