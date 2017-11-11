'use strict';

module.exports = function countSameElements(collection) {
    var result = [];
    for(var count = 0; count < collection.length; count ++){
        var spl = collection[count].split('-');
        if(spl.length !== 1){
            collection.splice(count,1);
            for(var j = 0;j< parseInt(spl[1]);j++){
                collection.push(spl[0]);
            }
        }
    }
    for(var i=0 ;i<collection.length;i++){
        if( !result){
            result.push({key:collection[i],count:1});
            continue;
        }
        for(var j=0;j<result.length;j++){
            if(result[j].key === collection[i]){
                result[j].count ++ ;
                break;
            }
        }
        if(j === result.length){
            result.push({key:collection[i],count:1});
        }
    }
    return result;
}
