'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var result = [];
  for(var j=0; j< collectionA.length; j++){
    for(var k = 0; k<collectionB.length; k++){
      if (collectionB[k] === collectionA[j]){
        result.push(collectionA[j]);
      }
    }
    }

  return result;
}
