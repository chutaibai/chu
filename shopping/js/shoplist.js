var shoplist = JSON.parse(localStorage.getItem("shopList"));
var html = "";
for (var i = 0; i < shoplist.length; i++) {
    html += `
        <tbody>
            <tr class="text-c">
                <td  class="title">${shoplist[i].title}</td>
                <td  class="introduction" >${shoplist[i].introduction}</td>
                <td>${shoplist[i].count}</td>
                <td  class="price">${shoplist[i].price}</td>
                <td>
                    <div class="btn-group" >
                      <input type="number" placeholder="选择商品数量" class="shopnum input-text radius">
                      <span class="btn btn-primary radius add">添加到购物车</span>
                    </div>
                </td>
            </tr>
        </tbody>
    `
    $("#tbody")[0].innerHTML = html;
}
var index = 0;
var add = document.getElementsByClassName("add");
for (var i = 0; i < shoplist.length; i++) {
    add[i].index = i;
    add[i].onclick = function () {
        if ($(".shopnum")[this.index].value == "" || $(".shopnum")[this.index].value < 0) {
            layer.msg('商品数量不能为空或者为负数');
        } else {
            if (shoplist[this.index].count - $(".shopnum")[this.index].value > 0) {
                shoplist[this.index].count = shoplist[this.index].count - $(".shopnum")[this.index].value
                localStorage.setItem("shopList", JSON.stringify(shoplist));
                var car = {
                    title: $(".title")[[this.index]].innerText,
                    introduction: $(".introduction")[this.index].innerText,
                    count: $(".shopnum")[this.index].value,
                    price: $(".price")[[this.index]].innerText,
                    sum: $(".shopnum")[this.index].value*$(".price")[[this.index]].innerText
                }
                var carlist = [];
                var localcar = JSON.parse(localStorage.getItem("carlist")) || [];
                if (localcar) {
                    carlist = localcar;
                }
                carlist.push(car);
                localStorage.setItem("carlist", JSON.stringify(carlist));
                history.go(0);
            } else {
                layer.msg('商品数量不足');
            }
        }
    }
}
