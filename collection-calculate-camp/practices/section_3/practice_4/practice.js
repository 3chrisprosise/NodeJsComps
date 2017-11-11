function create_updated_collection(collection_a, object_b) {
  var result = [];
  for(var count = 0; count < collection_a.length; count ++){
    var spl = collection_a[count].split('-');
    if(spl.length !== 1){
      collection_a.splice(count,1);
      for(var j = 0;j< parseInt(spl[1]);j++){
        collection_a.push(spl[0]);
      }
    }
  }
  for(var i=0 ;i<collection_a.length;i++){
    if( !result){
      result.push({key:collection_a[i],count:1});
      continue;
    }
    for(var j=0;j<result.length;j++){
      if(result[j].key === collection_a[i]){
        result[j].count ++ ;
        break;
      }
    }
    if(j === result.length){
      result.push({key:collection_a[i],count:1});
    }
  }

  for(var i = 0;i<result.length;i++){
    for(var j= 0;j<object_b.value.length;j++){
      if(result[i].key === object_b.value[j]){
        result[i].count  = result[i].count - Math.floor(result[i].count / 3);
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
