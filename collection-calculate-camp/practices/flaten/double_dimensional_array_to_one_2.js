'use strict';

function double_to_one(collection) {

  var result = [];
  var status = true;
  for(var i = 0;i<collection.length;i++){
    for(var j=0;j<collection[i].length;j++){
      if(result.length === 0){
        result.push(collection[i][j]);
      }else {
        for(var k =0;k<result.length;k++){
          if(result[k] === collection[i][j]){
            status = false;
          }
        }
        if(status){
          result.push(collection[i][j]);
        }else {status = true;}
      }
    }
  }
  return result;
}

module.exports = double_to_one;
