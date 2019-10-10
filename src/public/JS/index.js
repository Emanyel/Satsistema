$(document).ready(function(){
    $(window).scroll(function(){ 
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#cafe").offset();
        contenido2 = contenido2.top;
            if(windowHeight >= contenido2  ){
                $('#cafe').fadeIn(500);

            }else{

            }
        });
});