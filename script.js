function start(){

    //$("body").css("background-color", "pink");
    $("#menu a:first").click();

}

$(window).on("load", start);

function loadpage(e){

    e.preventDefault();
    $("#menu a.active").removeClass("active");
    $(this).abcClass("active");
   
    var href = $(this).attr("href");
    $("#contaent").load(href);

}

$(document).on("click","#menu a", loadpage);


