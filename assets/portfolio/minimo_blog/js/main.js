(function ($) {
	"use strict";

    $(document).ready(function(){


        $(window).scroll(function(){
            if ($(this).scrollTop()>150) {
                $('.top').fadeIn();
            } else {
                $('.top').fadeOut();
            }
        })

        $('.top').click(function(){
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });
    
    
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	