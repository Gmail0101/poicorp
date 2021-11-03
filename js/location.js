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
                                    <li><a href="./index.html">KR</a></li>
                                    <li><a href="#">EN</a></li>
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
                             <div>
                                 <ul id="sidebox">
                                     <li class="slidetitle">회사소개</li>
                                     <li><a href="./introduction.html">인사말</a></li>
                                     <li><a href="./CI.html">CI</a></li>
                                 </ul>
                             </div>
                             <div>
                                 <ul id="sidebox">
                                     <li class="slidetitle">사업영역</li>
                                     <li><a href="./chemistry.html">화학소재 사업</a></li>
                                     <li><a href="./it.html">IT 사업</a></li>
                                     <li><a href="./progress.html">진행사업</a></li>
                                 </ul>
                             </div>
                             <div>
                                 <ul id="sidebox">
                                     <li class="slidetitle">미디어센터</li>
                                     <li><a href="./news.html">포이뉴스</a></li>
                                     <li><a href="./prmaterials.html">홍보자료</a></li>
                                 </ul>
                             </div>
                             <div>
                                 <ul id="sidebox">
                                     <li class="slidetitle">고객센터</li>
                                     <li class="side_cu"><a href="./contactus.html">문의하기</a></li>
                                     
                                     <li class="side_cu"><a href="./map.html">찾아오시는길</a></li>
                                 </ul>
                             </div>
                         </div> 
                    </div>
</nav>`);
$(".ft_email_bg").html(`
    <div class="ft_email">
            <div class="ft_email_title">
                <h2>이메일무단수집거부</h2>
                <img class="ft_close" src="./images/그룹 129.png" alt="close">
            </div>
            <h3>개인정보 처리방침 안내</h3>
            <p>
                본 홈페이지에 게시된 이메일주소가 자동 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 처벌됨을 유념하시기 바랍니다. <br/>
                주식회사 포이 홈페이지에 게재된 모든 내용은 저작권법에 의해서 보호됨을 알려드립니다.    
            </p>
            <h3>정보통신망 이용촉진 및 정보보호 등에 관한 법률<br/>
                제50조의2(전자우편주소의 무단 수집행위 등 금지)</h3>
            <p>
                누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.<br/>
                누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니된다.<br/>
                누구든지 제1항의 및 제2항의 규정에 의하여 수집·판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니된다.<br/>
            </p>
            <h3>제74조(벌칙)</h3>
            <p>
                ① 다음 각 호의 어느 하나에 해당하는 자는 1년 이하의 징역 또는 1천만원 이하의 벌금에 처한다.<br/>
                5. 제50조의2를 위반하여 전자우편주소를 수집·판매·유통하거나 정보 전송에 이용한 자
            </p>
        </div>
`);
$(".ft_privacy_bg").html(`
        <div class="ft_privacy">
            <div class="ft_privacy_title">
                <h2>개인정보처리방침</h2>
                <img class="ft_close" src="./images/그룹 129.png" alt="close">
            </div>
            <h3>개인정보 처리방침 안내</h3>
            <p>주식회사포이(poicorp.co.kr)는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할<br/> 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
            <h3>제1조(개인정보의 처리 목적)</h3>
            <p>
                주식회사포이 홈페이지는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이<br/>용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                <br/><br/>
                1. 민원/문의 처리 - 제품/기술 및 구매 등 문의에 대한 상담 목적으로 개인정보를 처리합니다.<br/>
                2. 재화 또는 서비스 제공 - 콘텐츠 제공을 목적으로 개인정보를 처리합니다.<br/>
                3. 마케팅 및 광고에의 활용 - 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통<br/>계 등을 목적으로 개인정보를 처리합니다.
            </p>
            <h3>제2조(개인정보의 처리 및 보유 기간)</h3>
            <p>
                ① 주식회사포이 홈페이지는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내<br/>에서 개인정보를 처리·보유합니다.
                <br/>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                <br/><br/>
                1. 민원/문의처리, 재화/또는 서비스 제공, 마케팅 및 광고에의 활용과 관련한 개인정보는 수집.이용에 관한 동의일로부터까지 위 이용목적을 위하여<br/> 보유.이용됩니다.
                - 보유근거 : 「개인정보보호법」 제15조(개인정보의 수집·이용) 제1항<br/>
                - 관련법령 : 1)신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년<br/>
                2. 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br/>
                3. 예외사유 : 개별 요청시 즉시파기
            </p>
            <h3>제3조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h3>
            <p>
                ① 정보주체는 주식회사포이에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.<br/>
                ② 제1항에 따른 권리 행사는 주식회사 포이에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 주식회사 포이는 이에 대해 지체 없이 조치하겠습니다.<br/>
                ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.<br/>
                ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.<br/>
                ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.<br/>
                ⑥ 주식회사포이는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
            </p>
            <h3>제4조(처리하는 개인정보의 항목 작성)</h3>
            <p>① 주식회사포이는 민원/문의처리, 재화 또는 서비스 제공, 마케팅 및 광고에의 활용 처리를 위하여 다음의 개인정보 항목을 처리하고 있습니다.
                필수항목 : 이메일, 휴대전화번호, 이름, 부서, 회사명, 서비스 이용 기록, 접속 로그, 접속 IP 정보, 문의내용</p>
            <h3>제5조(개인정보의 파기)</h3>
            <p>
                ① 주식회사포이는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.<br/>
                ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.<br/>
                ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.<br/>
                <br/>
                1. 파기절차 - 주식회사포이는 파기 사유가 발생한 개인정보를 선정하고, 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.<br/>
                2. 파기방법 - 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다
            </p>
            <h3>제6조(개인정보의 안전성 확보 조치)</h3>
            <p>
                주식회사포이는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.<br/>
                1. 내부관리계획의 수립 및 시행 - 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.<br/>
                2. 개인정보에 대한 접근 제한 - 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.<br/>
                3. 비인가자에 대한 출입 통제 - 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.
            </p>
            <h3>제7조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)</h3>
            <p>
                ① 주식회사포이는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.<br/>
                ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.<br/>
                1. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.<br/>
                2. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.<br/>
                3. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
            </p>
            <h3>제8조 (개인정보 보호책임자)</h3>
            <p>① 주식회사포이는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                <br/><br/>
                ▶ 개인정보 보호책임자 손병배 042-932-8999
                <br/><br/>
                ② 정보주체께서는 주식회사포이의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 주식회사포이은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
            <h3>제9조(개인정보 열람청구)</h3>
            <p>정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 주식회사포이는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
                <br/><br/>
               ▶ 개인정보 열람청구 접수·처리 부서<br/>
               부서명 : 경영지원부
            </p>
            <h3>제10조(권익침해 구제방법)</h3>
            <p>
                정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                <br/><br/>
                1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)<br/>
                2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br/>
                3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)<br/>
                4. 경찰청 : (국번없이) 182 (cyberbureau.police.go.kr)<br/>
                「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br/>
                ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
            </p>
            <h3>제11조(개인정보 처리방침 변경)</h3>
            <p style="margin-bottom: 50px;">① 이 개인정보처리방침은 2021년 10월 22일부터 적용됩니다.</p>
        </div>
`);
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

    // 탭메뉴
    $(document).ready(function(){
  
        $('ul.tabs li').click(function(){
          var tab_id = $(this).attr('data-tab');
      
          $('ul.tabs li').removeClass('current');
          $('.tab-content').removeClass('current');
      
          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
        })
      
      })
    

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


// 현재 주소가 /introduction.html 일 경우 발생하는 jQuery
$(function(){
    var intro = "/introduction.html";
    var business = "/business.html";
    var promotion = "/promotion.html";
    var service = "/service.html";
    var ci = "/CI.html"

    if($(location).attr("pathname") == intro){
        $("#menuwrap").css({
            "height":"100px",
            "transition": "all .3s",
            "z-index": "1",
        })
    }else if($(location).attr("pathname") == business){
        $("#menuwrap").css({
            "height":"100px",
            "transition": "all .3s",
            "z-index": "1",
        })
    }else if($(location).attr("pathname") == promotion){
        $("#menuwrap").css({
            "height":"100px",
            "transition": "all .3s",
            "z-index": "1",
        })
    }else if($(location).attr("pathname") == service){
        $("#menuwrap").css({
            "height":"100px",
            "transition": "all .3s",
            "z-index": "1",
        })
    }else if($(location).attr("pathname") == ci){
        $("#menuwrap").css({
            "height":"100px",
            "transition": "all .3s",
            "z-index": "1",
        })
    }
})

// 윈도우 스크롤 200 이 넘어가면 top 버튼 생성
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()> 500){
            $(".topbtn").fadeIn();
        }else{
            $(".topbtn").fadeOut();
        }
    })
});
$(".topbtn").click(function() {
    $('html, body').animate({scrollTop : 0}, 400);
    return false;
});


$(document).ready(function(){
	
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})

/*
    location 검색
*/
$(function(){
    var chlink = "/chemistry.html?tab-2";

    if ($(location).attr("pathname")+""+$(location).attr('search') == chlink){
        $('.tab-link').eq(0).removeClass('current');
        $('.tab-content').eq(0).removeClass('current');

        $('.tab-link').eq(1).addClass('current');
        $('.tab-content').eq(1).addClass('current');
    }
 })

 $(function(){
    var ittwo = "/it.html?tab-2";
    var itthird = "/it.html?tab-3";

    if ($(location).attr("pathname")+""+$(location).attr('search') == ittwo){
       
        $('.tab-link1').eq(0).removeClass('current');
        $('.tab-content').eq(0).removeClass('current');

        $('.tab-link2').eq(0).addClass('current');
        $('.tab-content').eq(1).addClass('current');
    }else if($(location).attr("pathname")+""+$(location).attr('search') == itthird){
        $('.tab-link1').eq(0).removeClass('current');
        $('.tab-content').eq(0).removeClass('current');

        $('.tab-link3').eq(0).addClass('current');
        $('.tab-content').eq(2).addClass('current');
    }

 })
