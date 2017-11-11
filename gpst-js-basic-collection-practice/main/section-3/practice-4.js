'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [];
    for(var count = 0; count < collectionA.length; count ++){
        var spl = collectionA[count].split('-');
        if(spl.length !== 1){
            collectionA.splice(count,1);
            for(var j = 0;j< parseInt(spl[1]);j++){
                collectionA.push(spl[0]);
            }
        }
    }
    for(var i=0 ;i<collectionA.length;i++){
        if( !result){
            result.push({key:collectionA[i],count:1});
            continue;
        }
        for(var j=0;j<result.length;j++){
            if(result[j].key === collectionA[i]){
                result[j].count ++ ;
                break;
            }
        }
        if(j === result.length){
            result.push({key:collectionA[i],count:1});
        }
    }

    for(var i = 0;i<result.length;i++){
        for(var j= 0;j<objectB.value.length;j++){
            if(result[i].key === objectB.value[j]){
                result[i].count  = result[i].count - Math.floor(result[i].count / 3);
            }
        }
    }
    return result;
    
}
