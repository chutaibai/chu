$(".submit").click(function () {
    layer.msg('是否要增加商品', {
        time: 0,
        btn: ['是', '否'],
        yes: function (index) {
            var shop = {
                title: $(".title")[0].value,
                introduction: $(".introduction")[0].value,
                count: $(".count")[0].value,
                price: $(".price")[0].value
            }
            console.log(shop);
            var shopList = [];
            var localshop=JSON.parse(localStorage.getItem("shopList"));
            if(localshop){
                shopList=localshop;
            }
            console.log(shopList)
            if (shop.title == "" || shop.introduction == "" || shop.count == "" || shop.price == ""){
                layer.close(index);
                layer.msg('内容不许为空');
            }else{
                shopList.push(shop)
                localStorage.setItem("shopList",JSON.stringify(shopList));
                layer.msg('商品发布成功');
                layer.close(index);
                history.go(0);
            }
        },
        btn2: function () {
            layer.msg('您取消了发布新商品');
        }
    });
})