$("#menuwrap").html(`
 <span class="under"></span>
                <nav>
                    <ul id="menu">
                        <li><a href="./introduction.html">회사소개</a>
                            <ul class="submenu">
                                <li><a href="./introduction.html">인사말</a></li>
                                <li><a href="./CI.html">CI</a></li>
                            </ul>
                        </li>
                        <li><a href="./business.html">사업영역</a>
                            <ul class="submenu">
                                <li><a href="./chemistry.html">화학소재 사업</a></li>
                                <li><a href="./IT.html">IT 사업</a></li>
                                <li><a href="./progress.html">진행사업</a></li>
                            </ul>
                        </li>
                        <li><a href="./news.html">미디어센터</a>
                            <ul class="submenu">
                                <li><a href="./news.html">포이뉴스</a></li>
                                <li><a href="./prmaterials.html">홍보자료</a></li>
                            </ul>
                        </li>
                        <li><a href="./contactus.html">고객센터</a>
                            <ul class="submenu">
                                <li><a href="./contactus.html">문의하기</a></li>
                                <li><a href="./map.html">찾아오시는길</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div id="langwrap">
                        <ul>
                            <li id="lang">
                            <a href="#">
                            <img src="./images/lang.png" alt="icon"/>
                            <img src="./images/lang_arr.png" alt="arr" class="arr 0">
                            </a>
                                <ul class="langmenu">
                                    <li><a href="javascript:langChangeKr();">KR</a></li>
                                    <li><a href="javascript:langChange();">EN</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div id="chkbox">
                        <input type="checkbox" id="menuicon">
                            <label for="menuicon">
                                <span class="chk"></span>
                                <span class="chk"></span>
                                <span class="chk"></span>
                            </label>
                         <div class="sidebar">
                            <div class="mobile_in">
                               <ul>
                                    <li><a href="./introduction.html">회사소개</a></li>
                                    <li><a href="./business.html">사업영역</a></li>
                                    <li><a href="./news.html">미디어센터</a></li>
                                    <li><a href="./contactus.html">고객센터</a></li>
                               </ul>
                            </div>
                             <div class="mobile_none">
                                 <ul id="sidebox">
                                     <li class="slidetitle">회사소개</li>
                                     <li><a href="./introduction.html">인사말</a></li>
                                     <li><a href="./CI.html">CI</a></li>
                                 </ul>
                             </div>
                             <div class="mobile_none">
                                 <ul id="sidebox">
                                     <li class="slidetitle">사업영역</li>
                                     <li><a href="./chemistry.html">화학소재 사업</a></li>
                                     <li><a href="./it.html">IT 사업</a></li>
                                     <li><a href="./progress.html">진행사업</a></li>
                                 </ul>
                             </div>
                             <div class="mobile_none">
                                 <ul id="sidebox">
                                     <li class="slidetitle">미디어센터</li>
                                     <li><a href="./news.html">포이뉴스</a></li>
                                     <li><a href="./prmaterials.html">홍보자료</a></li>
                                 </ul>
                             </div>
                             <div class="mobile_none">
                                 <ul id="sidebox">
                                     <li class="slidetitle">고객센터</li>
                                     <li class="side_cu"><a href="./contactus.html">문의하기</a></li>
                                     <li class="side_cu"><a href="./map.html">찾아오시는길</a></li>
                                 </ul>
                             </div>
                         </div> 
                    </div>
</nav>`);

$("#menu>li").on({
mouseover : function(){
$(".submenu").stop().slideDown();
$(".under").css("opacity","1");
$("#menu>li>a").css("color","#363636");
$("#logo>h1>a>img").attr("src","./images/logo_black.png");
$("#lang>a>img:nth-child(1)").attr("src","./images/lang_black.png");
$("#lang>a>img:nth-child(2)").attr("src","./images/arr_black.png");
$(".chk").css({"background":"#5F6368"});
$("#menuwrap").stop().css({
"height":"266px",
"background":"#fff",
"transition": "all .7s",
"z-index": "1",
}).slidDown();
},
mouseleave : function(){
$(".submenu").stop().slideUp();
$(".under").css("opacity","0");
$("#menu>li>a").css("color","#fff");
$("#logo>h1>a>img").attr("src","./images/logo_white.png");
$("#lang>a>img:nth-child(1)").attr("src","./images/lang.png");
$("#lang>a>img:nth-child(2)").attr("src","./images/lang_arr.png");
$(".chk").css({"background":"#fff"});
$("#menuwrap").stop().css({
"height":"124px",
"background":"none",
"transition": "all .3s",
"z-index": "0",
})
}
});


        // 개인정보처리방침
$(".ft_inner li:nth-child(1)>a").click(function(){
    $(".ft_privacy_bg").css("display","block");
});
$(".ft_close").click(function(){
    $(".ft_privacy_bg").css("display","none");
});


        // 이메일무단수집거부
$(".ft_inner li:nth-child(2)>a").click(function(){
    $(".ft_email_bg").css("display","block");
})
$(".ft_close").click(function(){
    $(".ft_email_bg").css("display","none");
});


$("#lang").click(function(){
    if($(".arr").hasClass("0")){
        $(".arr").removeClass("0");
        $(".arr").css({
            "transform": "rotate(180deg)",
             "transition":"0.5s"
        });
        $(".arr").addClass("1");
    }else if($(".arr").hasClass("1")){
        $(".arr").removeClass("1");
        $(".arr").css({
            "transform": "rotate(0deg)",
             "transition":"0.5s"
        });
        $(".arr").addClass("0");
    }
});
$("#lang").click(function(){
    $(".langmenu").slideToggle(function(){});
});


// $(".slide1_nav li:nth-child(1)").click(function(){
//     $(".slide1_wrap li").css({
//         "transform": "translateX(0%)",
//         "transition": "all 0.7s"
//     })
//     $(this).css('color','#fff');
//     $(".slide1_nav li:nth-child(2)").css('color','#707070');
//     $(".slide1_nav li:nth-child(3)").css('color','#707070');
// });
// $(".slide1_nav li:nth-child(2)").click(function(){
//     $(".slide1_wrap li").css({
//         "transform": "translateX(-108%)",
//         "transition": "all 0.7s"
//     })
//     $(this).css('color','#fff');
//     $(".slide1_nav li:nth-child(1)").css('color','#707070');
//     $(".slide1_nav li:nth-child(3)").css('color','#707070');
// });
// $(".slide1_nav li:nth-child(3)").click(function(){
//     $(".slide1_wrap li").css({
//         "transform": "translateX(-216%)",
//         "transition": "all 0.7s"
//     })
//     $(this).css('color','#fff');
//     $(".slide1_nav li:nth-child(1)").css('color','#707070');
//     $(".slide1_nav li:nth-child(2)").css('color','#707070');
// });

// function prevFun(){
//    $(".slide_ch").prepend($(".slide_ch li").last().clone());
//    $(".slide_ch li").last().remove();
// }

// function nextFun(){
//     $(".slide_ch").append($(".slide_ch li").first().clone());
//     $(".slide_ch li").first().remove();
// }

// var timer = setInterval(function(){nextFun()},5000);

// $(".slide_ch").hover(function(){
//     clearInterval(timer);
// },function(){
//     timer = setInterval(function(){nextFun()},5000);
// });

// /*************************************************/
// /*              SEC4 IT slider                   */
// /*              SEC4 IT slider                   */
// /*              SEC4 IT slider                   */
// /*              SEC4 IT slider                   */
// /*************************************************/
// function prevFun2(){
//     $(".slide2_it").prepend($(".slide2_it li").last().clone());
//     $(".slide2_it li").last().remove();
// }

// function nextFun2(){
//     $(".slide2_it").append($(".slide2_it li").first().clone());
//     $(".slide2_it li").first().remove();
// }
// var timer2 = setInterval(function(){nextFun2()},5000);

// $(".slide2_it").hover(function(){
//     clearInterval(timer2);
// },function(){
//     timer2 = setInterval(function(){nextFun2()},5000);
// });
window.onload = function () {
    $('.slider4').jdSlider({
        wrap: '.slide-inner',
        isSliding: false,
        isAuto: true,
        isLoop: true,
        isDrag: false,
        interval:8000
    });
};



var gall  = setInterval(galleryFun, 5000);
var inter = true;
var idx = 1;
function galleryFun(){

$(".gallery ul").animate({
"left":-60*idx+"%"
},1000);
$(".moblie_slider").animate({
    "left":-100*idx+"%"
    },1000);
$(".g_item ul li").eq(idx).addClass("on").siblings().removeClass("on");

idx++;
if(idx> $(".gallery ul li").length-3){
$(".gallery ul").animate({
},1000);
idx=0;
}
}


$(".gallery").hover(function(){
if(inter==true){
clearInterval(gall);
inter=false;
}
},function(){
if(inter==false){
gall  = setInterval(galleryFun, 5000);
inter=true;
}

});



$(".g_item ul li").on('click',function(){
$(this).addClass("on").siblings().removeClass("on");
idx = $(this).index();
$(".gallery ul").animate({
"left":-60*idx+"%"
},1000);
$(".moblie_slider").animate({
    "left":-100*idx+"%"
    },1000);
});

    // $(".g_item2 ul li").on('click',function(){
    // $(this).addClass("off").siblings().removeClass("off");
    // idx = $(this).index();
    // $(".gallery ul").animate({
    // "left":-630*idx+"px"
    // },1000);
    // });


    var itslider  = setInterval(itslideFun, 5000);
    var k = true;
    var j = 1;
    
    function itslideFun(){
    
    $(".itslide ul").animate({
    "left":-60*j+"%"
    },1000);
    $(".mo_slide2").animate({
        "left":-90*j+"%"
        },1000);
    $(".it_item ul li").eq(j).addClass("off").siblings().removeClass("off");
    
    j++;
    if(j> $(".itslide ul li").length-4){
    $(".itslide ul").animate({
    },1000);
    j=0;
    }
    }
    
    
    $(".itslide").hover(function(){
    if(k==true){
    clearInterval(itslider);
    k=false;
    }
    },function(){
    if(k==false){
    itslider  = setInterval(itslideFun, 5000);
    k=true;
    }
    
    });
        
    
    $(".it_item ul li").on('click',function(){
    $(this).addClass("off").siblings().removeClass("off");
    j = $(this).index();
    $(".itslide ul").animate({
    "left":-60*j+"%"
    },1000);
    $(".mo_slide2").animate({
        "left":-90*j+"%"
        },1000);
    });

    



    function langChange(){
        var ko = "/index.html";
        alert($(location).attr('host'));
        alert($(location).attr('hostname'));
        alert($(location).attr('pathname'));
        alert($(location).attr('href'));
        alert($(location).attr('port'));
        alert($(location).attr('protocol'));
        if ($(location).attr("pathname") == ko){
            location.href = "./index.html?en";
        }
    }
    // $(location).attr('host');
    // $(location).attr('hostname');
    // $(location).attr('pathname');
    // $(location).attr('href');
    // $(location).attr('port');
    // $(location).attr('protocol');
