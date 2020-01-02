(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        $(".homepage-slide-area").owlCarousel({
            items:1,
            autoplay:false,
            dots:true,
            nav:false,
            loop:true
        });
        $(".logo-carousel").owlCarousel({
            items:5,
            loop:true,
            autoplay:false,
            nav:false,
            dots:false
        })
        $(".off-canvas-menu").on('click', function(){
            $(".header-bottom-area").addClass('active');
            $(this).addClass('dismiss');
        });
        $("i.fa.fa-close , .homepage-slide-area").on('click', function(){
            $(".header-bottom-area").removeClass('active');
            $('.off-canvas-menu').removeClass('dismiss');
        });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	