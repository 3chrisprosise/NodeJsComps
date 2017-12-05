const database = require("./database");

// 计算距离总价格
function Price_Distance(inputs) {
    var result = [],
        total;
    inputs.forEach(function (obj) {
        total = 0;
        if(obj.distance <= 2){
            total = 6;
        }else if(obj.distance <= 8){
            total = 6 + (8 - obj.distance) * 0.8;
        }else{
            total = 6 + 6 * 0.8 + (obj.distance - 8) * 1.2;
        }
        result.push(parseFloat(total.toFixed(2)));
    });
    return result;
}

function TotalTime(inputs) {
    var st = [];
    inputs.forEach(function (obj) {
        st.push(obj.time * 0.25);
    });
    return st;
}
function arrAdd(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++){
        arr1[i] += arr2[i];
    }
    arr1 = arr1.map(Math.round);
    return arr1;
}

function main() {
    var result = [],
        st = [],
        sum = [],
        inputs = [];
    inputs = database.loadAllItems();
    result = Price_Distance(inputs);
    st = TotalTime(inputs);
    sum = arrAdd(result, st);
    return sum;
}

module.exports = {
    "Price_Distance": Price_Distance,
    "TotalTime": TotalTime,
    "main": main
};