const main = require('../main/main');
const datbase = require('../main/datbase');

describe('112', function () {
    var allItems,
        inputs,
        promotions,
        infoInput = [],
        result = [],
        free = [];

    beforeEach(function () {
        allItems = datbase.loadAllItems();
        promotions = datbase.loadPromotions();
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005',
        ];
    });

    it("formatInputs", function () {
        var expectText = [
            {barcode: 'ITEM000001', num: 5},
            {barcode: 'ITEM000003', num: 2},
            {barcode: 'ITEM000005', num: 3}
        ];

        infoInput = main.formatInputs(inputs, infoInput);
        expect(infoInput).toEqual(expectText);
    });

    it("createArr", function () {
        var expectArr = [
            [
                {name: '雪碧', unit: '瓶', price: 3, num: 5, sumPrice: 15},
                {name: '荔枝', unit: '斤', price: 15, num: 2, sumPrice: 30},
                {name: '方便面', unit: '袋', price: 4.5, num: 3, sumPrice: 13.5}
            ],
            [
                {name: '雪碧', num: 1, unit: '瓶', price: 3},
                {name: '方便面', num: 1, unit: '袋', price: 4.5}
            ]
        ];

        var arr = [];
        arr = main.createArr(allItems, promotions, infoInput, result, free);
        expect(arr).toEqual(expectArr);
    });

    it("subtotal", function () {
        var expectArr = [
                            {name: '雪碧', unit: '瓶', price: 3, num: 5, sumPrice: 12},
                            {name: '荔枝', unit: '斤', price: 15, num: 2, sumPrice: 30},
                            {name: '方便面', unit: '袋', price: 4.5, num: 3, sumPrice: 9}
                        ];
        var re = main.subtotal(result, free);
        expect(re).toEqual(expectArr);
    });

    it('main: ', function () {

        spyOn(console, 'log');

        main.main(inputs);

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';


        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
