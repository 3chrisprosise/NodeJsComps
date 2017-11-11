'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result = [];
    for(var j=0;j< collectionA.length; j++){
        for(var k = 0; k<objectB.value.length; k++){
            if (objectB.value[k] === collectionA[j]){
                result.push(collectionA[j]);
            }
        }
    }
    return result;
}
