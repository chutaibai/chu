//渲染头部
var html = "";
for (var i = 0; i < screentopdata.length; i++) {
    html += `
        <div class="screenhead">
          <h2 class="screenhead-title">${screentopdata[i].title}</h2>
          <ul class="screenhead-content ${screentopdata[i].sign}">`
    for (var j = 0; j < screentopdata[i].array.length; j++) {
        html += `<li class="screenhead-list">${screentopdata[i].array[j]}</li>`
    }
    html += `</ul>
        </div>
        `
    $(".screen-top")[0].innerHTML = html;
};

//渲染筛选条件
var coverHTML = function (screenbottomdata) {
    var html2 = ""
    for (var i = 0; i < screenbottomdata.length; i++) {
        html2 += `
            <div class="panel panel-primary ">
              <div class="panel-header">${screenbottomdata[i].name}</div>
              <div class="panel-body">
                <ol>
                  <li><span>商铺类型:</span>${screenbottomdata[i].type}</li>
                  <li><span>商铺商标:</span>${screenbottomdata[i].trademarks}<em>标</em></li>
                  <li><span>商铺地区:</span>${screenbottomdata[i].area}</li>
                  <li><span>商铺价格:</span>${screenbottomdata[i].price}<em>万</em></li>
                </ol>
              </div>
            </div>
            `
        $(".screen-bottom")[0].innerHTML = html2;
    }
};
coverHTML(screenbottomdata);

//设置筛选条件对象
var filterdata = [{
    type: "",
    trademarks: "",
    area: ""
}];
//key值为filterdata的关键值

//筛选点击事件
$(".type .screenhead-list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    if (filterdata[0].type = " ") {
        filterdata[0].type = this.innerHTML
    };
    filterscreen()
})

$(".trademarks .screenhead-list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    if (filterdata[0].trademarks = " ") {
        filterdata[0].trademarks = this.innerHTML
    }
    filterscreen()
})

$(".area .screenhead-list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    if (filterdata[0].area = " ") {
        filterdata[0].area = this.innerHTML
    };
    filterscreen()
})

//筛选函数
var filterscreen = function () {
    selected();
    var filterKey = [];
    for (key in filterdata[0]) {
        if (filterdata[0][key] != "") {
            filterKey.push(key)
        }
    } //通过双方的key值里的值是否相等作为判断
    var newArray = screenbottomdata.filter(tem => {
        return filterKey.every(key => {
            return tem[key] == filterdata[0][key]
        })
    })
    if (newArray == "") {
        $(".screen-bottom")[0].innerHTML = `
        <div class="panel panel-danger">
          <div class="panel-header">抱歉，无此数据</div>
        </div>`
    } else {
        coverHTML(newArray)
    }
}

//已选筛选条件函数
var selected = function () {
    console.log(filterdata[0])
    var html3 = "";
    for (var key in filterdata[0]) {
        if (filterdata[0][key] != "") {
            html3 += `
            <li class="screenhead-list">${filterdata[0][key]}<span class="del" data-name="${key}">x</span></li>
            `
            $(".screenhead-content")[0].innerHTML = html3;
        } else {
            $(".screenhead-content")[0].innerHTML = html3;
        }
    }
    $(".del").click(function (e) {
        var screenkey = e.target.dataset.name
        // console.log(screenkey)
        filterdata[0][screenkey] = "";
        filterscreen();
        $(`.${screenkey} .screenhead-list.active`).removeClass("active");
    })
}

//排序函数
var price=true;
$(".pricesort").click(function(){
    price=!price;
    if(price){
        screenbottomdata.sort(function(a,b){
            return a.price-b.price;
        })
        $(".pricesort")[0].innerHTML="按价格排序↑"
        filterscreen();
    }else{
        screenbottomdata.sort(function(a,b){
            return b.price-a.price;
        })
        $(".pricesort")[0].innerHTML="按价格排序↓"
        filterscreen();
    }
})