/*
* 1、起步价 6 块，两公里以内 6 块。
* 2、大于两公里，开始按照每公里 0.8。
* 3、大于八公里，开始按照每公里 1.2。
* 4、每 min == 0.25。
* */

const main = require('../main/main');
const database = require("../main/database");

describe('taxi fee', function () {
    // write your tests here...

    var sd = [],
        st = [],
        sum = [],
        inputs = [];

    inputs = database.loadAllItems();

    it("计算每单距离的价格：", function () {
        var expectArr = [6, 8.4, 13.2];
        sd = main.Price_Distance(inputs);
        expect(sd).toEqual(expectArr);
    });

    it("计算每单停车时间的价格：", function () {
        var expectArr = [0, 1.25, 2.5];
        st = main.TotalTime(inputs);
        expect(st).toEqual(expectArr);
    });

    it("计算总价格：", function () {
        var expectArr = [6, 10, 16];
        sum = main.main(inputs);
        expect(sum).toEqual(expectArr);
    });
});
