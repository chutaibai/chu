$(".active .number").click(function () {
    console.log(this.innerText)
    $("audio")[0].playbackRate = 5;
    $("audio")[0].play();
    $(".screen")[0].innerText +=this.innerText;
})

$(".cls").click(function () {
    $(".screen")[0].innerText = ""
});

$(".del").click(function () {
    var a = $(".screen")[0].innerText;
    // console.log(a.length)
    var b = a.slice(0, a.length - 1);
    $(".screen")[0].innerText = b;
});

$(".equal").click(function () {
    try {
        var num = 0;
        console.log(((parseFloat($(".screen")[0].innerText))))
        num =eval(($(".screen")[0].innerText))
        $(".screen")[0].innerText = num.toFixed(2);
    } catch (err) {
        alert("计算器格式错误")
    }
})
