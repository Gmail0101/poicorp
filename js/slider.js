 $(document).ready(function() {
   var count = 0;
  //  var images =["./images/main_img1.jpg","./images/main_img2.jpg","./images/main_img3.jpg","./images/main_img4.jpg"];
  //  var image = $(".section:nth-child(1)");
   var htmltxt = $(".visualbox>h2:nth-child(1)");
   var htmltxt2 = $(".visualbox>h2:nth-child(2)");
   var htmltext = [""];
   var htmltext2 = [""];
   var n = 0;
   htmltext[0] = "풍요로운 삶을 위해";
   htmltext[1] = "우리의 기술 역량에 혁신을 더해";
   htmltext[2] = "우리의 기술 역량에 혁신을 더해";   // 수정할부분
   htmltext[3] = "Create Innovation with";

   var j = 0;
   htmltext2[0] = "새로운 가치를 향해 나아갑니다.";
   htmltext2[1] = "무한한 가능성을 열어갑니다.";
   htmltext2[2] = "무한한 가능성을 열어갑니다.";     // 수정할부분
   htmltext2[3] = "Advanced Technology";

   var timer = 5000;
  //  image.css("background-image","url("+images[count++]+")");
   htmltxt.text(htmltext[n++]);
   htmltxt2.text(htmltext2[j++]);
   var textslide = setInterval(function(){
      //  image.animate({"opacity":"0.9"},timer2, function(){
      //  image.css({"background-image":"url("+images[count++]+")"});
      //  image.animate({"opacity":"1"},1000)
    //  });
    //  if(count == images.length){
    //    count = 0;
    //  }
    htmltxt.text(htmltext[n++]).show().css("opacity",0.5).animate({"opacity":1},(timer-500));
    htmltxt2.text(htmltext2[j++]).show().css("opacity",0.5).animate({"opacity":1},(timer-500));
     if(n == htmltext.length){
       n = 0;
     }
     if(j == htmltext2.length){
       j = 0;
     }
   },timer);
    $("#pause").hover(function(){
      clearInterval(textslide);
    },function(){
      textslide = setInterval(function(){

      htmltxt.text(htmltext[n++]).show().css("opacity",0.5).animate({"opacity":1},(timer-500));
      htmltxt2.text(htmltext2[j++]).show().css("opacity",0.5).animate({"opacity":1},(timer-500));
      if(n == htmltext.length){
        n = 0;
      }
      if(j == htmltext2.length){
        j = 0;
      }
    },timer);
      });
    });
 


var n = 0;
function count(){ //변수 n을 카운트 해주는 함수
/* n이 0 1 2 3 0 1 2 3  되도록 만들어 주는 함수*/
 n++;
 if(n<4){ //n이 4보다 작으면 실행될 실행문..
    viewSlide(n);
 }else{
    n=0;
    viewSlide(n);
 }
}
var time = 5000;
var slideStart = setInterval("count()",time);
function viewSlide(n){
    $("#bgimg img").animate({"opacity":"0"},(time-500)); 
    $("#bgimg img").eq(n).stop().addClass("topImg").show().css("opacity",0).animate({"opacity":1},(time-500));

}
$("#pause").hover(function(){
  clearInterval(slideStart);
},function(){
  slideStart =  setInterval("count()",time);
});

$("#pause").on({
  mouseover : function(){
    $("#pause").val("시작");
  },
  mouseleave : function(){
    $("#pause").val("중지");
  }
  });