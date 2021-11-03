new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'left',
    fitToSection: true,
	afterLoad: function(origin, destination, direction){
        if(destination.index == 0){
            $("#header").css({"background":"#fff","transition":"all 0.3s"});
            $("#fp-nav ul li a span").css({"background":"#fff","transition":"all 0.3s"});
        }else if(destination.index == 1){
            $("#fp-nav ul li a span").css({"background":"#000","transition":"all 0.3s"});
        }else if(destination.index == 2){
            
        }else if(destination.index == 3){

        }
    },
});