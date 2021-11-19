
/* langChange */
function langChange(){
    var index = "/index.html";
    var intro = "/introduction.html";
    var ci = "/CI.html";
    var business = "/business.html";
    var chemistry = "/chemistry.html";
    var IT = "/IT.html";
    var progress = "/progress.html";
    var news = "/news.html";
    var prmaterials = "/prmaterials.html";
    var contactus = "/contactus.html";
    var map = "/map.html";


    if($(location).attr("pathname")+""+$(location).attr('search') == index){
        location.href = "/en/index.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == intro){
        location.href = "/en/introduction.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == ci){
        location.href = "/en/CI.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == business){
        location.href = "/en/business.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == chemistry){
        location.href = "/en/chemistry.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == IT){
        location.href = "/en/IT.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == progress){
        location.href = "/en/progress.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == news){
        location.href = "/en/news.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == prmaterials){
        location.href = "/en/prmaterials.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == contactus){
        location.href = "/en/contactus.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == map){
        location.href = "/en/map.html";
    }
}

/* langChange */
function langChangeKr(){
    var index = "/en/index.html";
    var intro = "/en/introduction.html";
    var ci = "/en/CI.html";
    var business = "/en/business.html";
    var chemistry = "/en/chemistry.html";
    var IT = "/en/IT.html";
    var progress = "/en/progress.html";
    var news = "/en/news.html";
    var prmaterials = "/en/prmaterials.html";
    var contactus = "/en/contactus.html";
    var map = "/en/map.html";


    if($(location).attr("pathname")+""+$(location).attr('search') == index){
        location.href = "/index.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == intro){
        location.href = "/introduction.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == ci){
        location.href = "/CI.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == business){
        location.href = "/business.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == chemistry){
        location.href = "/chemistry.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == IT){
        location.href = "/IT.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == progress){
        location.href = "/progress.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == news){
        location.href = "/news.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == prmaterials){
        location.href = "/prmaterials.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == contactus){
        location.href = "/contactus.html";
    }
    if($(location).attr("pathname")+""+$(location).attr('search') == map){
        location.href = "/map.html";
    }
}

function mapclick(){
    location.href = './map.html'
}
function newsclick(){
    location.href = './news.html'
}
function usclick(){
    location.href = './contactus.html'
}