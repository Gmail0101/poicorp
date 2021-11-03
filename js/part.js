$(".business_box ul li:nth-child(1)").click(function(){
        // $(".business_img div:nth-child(1)>img").css({"z-index":"1"});
        $(".business_img div:nth-child(1)>img").css({"opacity":"0","z-index":"1"}).animate({"opacity":1},1000);
        $(".business_img div:nth-child(2)>img").css({"z-index":"auto","opacity":"0"});
        $(".business_img div:nth-child(3)>img").css({"z-index":"auto","opacity":"0"});
});
$(".business_box ul li:nth-child(2)").click(function(){
        $(".business_img div:nth-child(1)>img").css({"z-index":"auto","opacity":"0"});
        $(".business_img div:nth-child(2)>img").css({"opacity":"0","z-index":"1"}).animate({"opacity":1},1000);
        $(".business_img div:nth-child(3)>img").css({"z-index":"auto","opacity":"0"});
});
$(".business_box ul li:nth-child(3)").click(function(){
        $(".business_img div:nth-child(1)>img").css({"z-index":"auto","opacity":"0"});
        $(".business_img div:nth-child(2)>img").css({"z-index":"auto","opacity":"0"});
        $(".business_img div:nth-child(3)>img").css({"opacity":"0","z-index":"1"}).animate({"opacity":1},1000);
});

$(".business_it_box ul li:nth-child(1)").click(function(){
        $(".business_it_img div:nth-child(1)>img").css({"opacity":"0","z-index":"1"}).animate({"opacity":1},1000);
        $(".business_it_img div:nth-child(2)>img").css({"z-index":"auto","opacity":"0"});
        $(".business_it_img div:nth-child(3)>img").css({"z-index":"auto","opacity":"0"});
});
$(".business_it_box ul li:nth-child(2)").click(function(){
        $(".business_it_img div:nth-child(1)>img").css({"z-index":"auto","opacity":"0"});
        $(".business_it_img div:nth-child(2)>img").css({"opacity":"0","z-index":"1"}).animate({"opacity":1},1000);
        $(".business_it_img div:nth-child(3)>img").css({"z-index":"auto","opacity":"0"});
});
$(".business_it_box ul li:nth-child(3)").click(function(){
        $(".business_it_img div:nth-child(1)>img").css({"z-index":"auto","opacity":"0"});
        $(".business_it_img div:nth-child(2)>img").css({"z-index":"auto","opacity":"0"});
        $(".business_it_img div:nth-child(3)>img").css({"opacity":"0","z-index":"1"}).animate({"opacity":1},1000);
});
