var flag = true;
$(document).ready(function(){
    var current;
    
    if(flag){
        current = $("#about-link");
        flag = false;
    }

    $("li").click(function(){
        current.removeClass("active");
        current = $(this);
        current.addClass("active");
    });
});
