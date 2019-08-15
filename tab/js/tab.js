$(".nav").click(function(){
    $(".nav").removeClass("active");
    $(this).addClass("active");
    $(".tab").eq($(this).index()).addClass("act").siblings().removeClass("act");
})