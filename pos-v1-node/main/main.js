const database = require("./datbase");

module.exports  = function () {
        this.printInventory = function (inputs) {
            var buyCart = [];
            for(var item = 0;item < inputs.length; item ++){
                if(! buyCart){
                    buyCart.push({item:inputs[item], count:1, name:"", price:0, unit:"" , discount:false});
                }
                if(inputs[item].split("-").length !== 1){
                    for(var i =0;i<parseInt(inputs[item].split("-")[1]); i++){
                        inputs.splice(item + 1, 0, inputs[item].split("-")[0]);
                    }
                    inputs.splice(item, 1);
                }
                var inBuyCart = false;
                for(var j=0;j < buyCart.length; j++){
                    if(inputs[item] === buyCart[j].item){
                        buyCart[j].count ++;
                        inBuyCart = true;
                    }
                }
                if(! inBuyCart){
                    buyCart.push({item:inputs[item], count:1, name:"", price:0, unit:"", discount:false});
                }
            }
            /* 计算价格 */
            var disCountPrice = 0;
            var totalPrice = 0;
            var LocalItems = database.loadAllItems;
            var loadPromotions = database.loadPromotions;
            var resultStrItems =
                '***<没钱赚商店>购物清单***\n';
            var resultStrDiscountItems =
                '----------------------\n' +
                '挥泪赠送商品：\n' ;
            var resultStrPrice =
                '----------------------\n' ;
            for(var lcItem=0; lcItem < LocalItems.length; lcItem ++){
                for(var cartItem = 0;cartItem < buyCart.length; cartItem ++){
                    if(buyCart[cartItem].item === LocalItems[lcItem].barcode){
                        buyCart[cartItem].name = LocalItems[lcItem].name;
                        buyCart[cartItem].unit = LocalItems[lcItem].unit;
                        buyCart[cartItem].price = LocalItems[lcItem].price;
                    }
                }
            }

            for(var disItem =0; disItem < loadPromotions[0].barcodes.length; disItem ++){
                for(var cartItem = 0;cartItem < buyCart.length; cartItem ++){
                    if(loadPromotions[0].barcodes[disItem] === buyCart[cartItem].item){
                        buyCart[cartItem].discount = true;
                    }
                }
            }

            for(var cartItem = 0;cartItem < buyCart.length; cartItem ++){
                resultStrItems += '名称：'+
                    buyCart[cartItem].name +
                    '，数量：'+ buyCart[cartItem].count +
                    buyCart[cartItem].unit +
                    '，单价：'+
                    buyCart[cartItem].price.toFixed(2) +
                    '(元)，小计：'+
                    (parseFloat(buyCart[cartItem].price) * (buyCart[cartItem].count-Math.floor(buyCart[cartItem].count/3))).toFixed(2)+
                    '(元)\n';
                totalPrice  = parseFloat(totalPrice) + parseFloat((parseFloat(buyCart[cartItem].price) * (buyCart[cartItem].count-Math.floor(buyCart[cartItem].count/3))).toFixed(2));

                if(parseInt(buyCart[cartItem].count) >= 3){
                    resultStrDiscountItems += '名称：'+
                        buyCart[cartItem].name +
                        '，数量：'+
                        Math.floor((buyCart[cartItem].count)/3) +
                        ''+
                        buyCart[cartItem].unit +
                        '\n';
                    disCountPrice = parseFloat(disCountPrice) + parseFloat(Math.floor((buyCart[cartItem].count)/3) * parseFloat(buyCart[cartItem].price));
                }


            }
            resultStrPrice +=
                '总计：'+
                totalPrice.toFixed(2) +
                '(元)\n' +
                '节省：'+
                disCountPrice.toFixed(2) +
                '(元)\n' +
                '**********************';

            console.log(resultStrItems +resultStrDiscountItems +resultStrPrice);
        };
        return {printInventory: this.printInventory};
};

