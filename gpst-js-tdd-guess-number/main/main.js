// Write your cade below:

function createRandom() {
    let str = "";
    while (true){
        if(str.length === 4){
            break;
        }

        var number = (Math.random() * 9).toFixed(0);
        if(str.indexOf(number) < 0){
            str += number;
        }
    }
    return str;
}

function judge(rand, arr) {
    let Aright, Bright,
        result = [];
    for(let i = 0; i < arr.length; i++){
        Aright = Bright = 0;
        for(let j = 0; j < rand.length; j++){
            if(rand[j] === arr[i][j]){
                Aright++;
            }else{
                Bright++;
            }
        }
        result.push(Aright + "Aright" + Bright + "Bright");
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
    createRandom,
    main
};