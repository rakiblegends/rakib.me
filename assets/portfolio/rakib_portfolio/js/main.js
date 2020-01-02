(function ($) {
	"use strict";
    $(document).ready(function () {
        $('.single-portfolio-item').hover(function(){
            $('.portfolio-hover-item h3').removeClass('animated slideInUp');
            $(this).find('.portfolio-hover-item h3').addClass('animated slideInUp');
        });


        $('.menu-trigger').on('click', function(){
            $('.off-canvas-menu').addClass('active');
            $('.off-canvas-overlay').addClass('active');
        });

        $('.menu-close i.fa,.off-canvas-overlay').on('click', function(){
            $('.off-canvas-menu').removeClass('active');
            $('.off-canvas-overlay').removeClass('active');
        })
        $('.header-area').headroom();

       
    });


    jQuery(window).on('load', function(){
        var $container = $('.portfolio-list');
        $container.imagesLoaded( function() {
        $container.masonry({
            percentPosition:true
            
        }); 
    });
    });

}(jQuery));	