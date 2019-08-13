var carlist = JSON.parse(localStorage.getItem("carlist"));
var html = "";
for (var i = 0; i < carlist.length; i++) {
    html += `
        <tbody>
            <tr class="text-c">
                <td class="title"><input type="checkbox" class="one">${carlist[i].title}</td>
                <td class="introduction" >${carlist[i].introduction}</td>
                <td class="count">${carlist[i].count}</td>
                <td><div class="btn-group add">
                <span class="btn btn-primary radius">+</span>
                </div></td>
                <td class="price">${carlist[i].price}</td>
                <td class="pricesum">${carlist[i].sum}</td>
            </tr>
        </tbody>
    `
    $("#tbody2")[0].innerHTML = html;
}

var index = 0;
var ischeckedall = true;
var add = document.getElementsByClassName("add");
var check = document.getElementsByClassName("one");
var len = carlist.length;
$(".all").click(function () {
    for (var i = 0; i < len; i++) {
        priceall = parseFloat($(".hthree")[0].innerHTML) + carlist[i].price * carlist[i].count
        if ($(".all")[0].checked == true) {
            $(".one")[i].checked = true;
            $(".hthree")[0].innerHTML = priceall;
        } else {
            $(".one")[i].checked = false;
            $(".hthree")[0].innerHTML = 0;
        }
    }
})
for (var i = 0; i < carlist.length; i++) {
    add[i].index = i;
    check[i].index = i;
    add[i].onclick = function () {
        carlist[this.index].count++;
        psum = carlist[this.index].price * carlist[this.index].count
        $(".count")[this.index].innerHTML = carlist[this.index].count;
        $(".pricesum")[this.index].innerHTML = psum;
        if ($(".one")[this.index].checked == true) {
            $(".hthree")[0].innerHTML = parseFloat($(".hthree")[0].innerHTML) + parseFloat(carlist[this.index].sum);
        }
    }
    check[i].onclick = function () {
        sum1 = parseFloat($(".hthree")[0].innerHTML) + carlist[this.index].price * carlist[this.index].count
        sum2 = parseFloat($(".hthree")[0].innerHTML) - carlist[this.index].price * carlist[this.index].count
        if ($(".one")[this.index].checked == true) {
            $(".hthree")[0].innerHTML = sum1;
        } else {
            $(".hthree")[0].innerHTML = sum2;
            $(".all")[0].checked = false;
        }
        for (var i = 0; i < len; i++) {
            if ($(".one")[this.index].checked == true) {
                $(".all")[0].checked = true;
            }
        }
    }
}