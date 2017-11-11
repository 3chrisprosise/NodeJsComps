function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var status = true;
  for(var i = 0;i<collection.length;i++){
    if(result === []){
      result.push({key:collection[i], count:1})
    }else {
      for(var j = 0;j<result.length;j++){
        if(result[j].key === collection[i]){
          result[j].count ++;
          status = false;
        }
      }
      if(status){
        result.push({key:collection[i], count:1});
      }
      status = true;
    }
  }
  return result;
}

module.exports = count_same_elements;
