const main = require('../main/main');

describe('main()', () => {
    let arr = [],
        result = [];
    for(let i = 0; i < 10; i++){
        arr.push(main.createRandom());
    }

    it("测试：", function () {
        result = main.main(arr);
        console.log(result);
    });
});