// Write your cade below:

// 生成四位随机数
function createRandom() {
    let str = "";
    while (true){
        if(str.length === 4){
            break;
        }
        let num = (Math.random() * 9).toFixed(0);
        if(str.indexOf(num) < 0){
            str += num;
        }
    }
    return str;
}

// 判断是否相同
function judge(rand, arr) {
    let A, B,
        result = [];
    for(let i = 0; i < arr.length; i++){
        A = B = 0;
        for(let j = 0; j < rand.length; j++){
            if(rand[j] === arr[i][j]){
                A++;
            }else{
                B++;
            }
        }
        result.push(A + "A" + B + "B");
    }
    return result;
}

function main(arr) {
    let rand = createRandom(),
        result = [];
    result = judge(rand, arr);
    return result;
}

module.exports = {
    "createRandom": createRandom,
    "main": main
};