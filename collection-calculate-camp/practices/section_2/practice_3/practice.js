function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  for(var count = 0; count < collection.length; count ++){
    var spl = collection[count].split('-');
    if(spl.length !== 1){
      collection.splice(count,1);
      for(var j = 0;j< parseInt(spl[1]);j++){
        collection.splice(count,0,spl[0]);
      }
    }
    var spl = collection[count].split(':');
    if(spl.length !== 1){
      collection.splice(count,1);
      for(var j = 0;j< parseInt(spl[1]);j++){
        collection.splice(count,0,spl[0]);
      }
    }
    var spl = collection[count].split('[');
    if(spl.length !== 1){
      collection.splice(count,1);
      for(var j = 0;j< parseInt(spl[1].split(']')[0]);j++){
        collection.splice(count,0,spl[0]);
      }
    }
  }
  for(var i=0 ;i<collection.length;i++){
    if( !result){
      result.push({name:collection[i],summary:1});
      continue;
    }
    for(var j=0;j<result.length;j++){
      if(result[j].name === collection[i]){
        result[j].summary ++ ;
        break;
      }
    }
    if(j === result.length){
      result.push({name:collection[i],summary:1});
    }
  }
  return result;

}

module.exports = count_same_elements;
