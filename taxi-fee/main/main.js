const database = require("./database");

// 计算距离总价格
function sumDistance(inputs) {
    let sd = [],
        sum;
    inputs.forEach(function (obj) {
        sum = 0;
        if(obj.distance <= 2){
            sum = 6;
        }else if(obj.distance <= 8){
            sum = 6 + (8 - obj.distance) * 0.8;
        }else{
            sum = 6 + 6 * 0.8 + (obj.distance - 8) * 1.2;
        }
        sd.push(parseFloat(sum.toFixed(2)));
    });
    return sd;
}

// 计算停车时间总价格
function sumTime(inputs) {
    let st = [];
    inputs.forEach(function (obj) {
        st.push(obj.time * 0.25);
    });
    return st;
}

// 计算两个价格的和
function arrAdd(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
        arr1[i] += arr2[i];
    }
    arr1 = arr1.map(Math.round);
    return arr1;
}

// 主函数
function main() {
    let sd = [],
        st = [],
        sum = [],
        inputs = [];
    inputs = database.loadAllItems();
    sd = sumDistance(inputs);
    st = sumTime(inputs);
    sum = arrAdd(sd, st);
    return sum;
}

module.exports = {
    "sumDistance": sumDistance,
    "sumTime": sumTime,
    "main": main
};