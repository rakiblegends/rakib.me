(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        //Preloader
        $('#loading').fadeOut();
        $('#tablet-menu').slicknav({
            prependTo:'#tablet-menu-placement',
            allowParentLinks:true,
        });
        $('#tablet-menu-placement ul li a').on('click',function(){
            $('#tablet-menu-placement ul').addClass('slicknav_hidden');
            $('#tablet-menu-placement ul').attr('aria-hidden','true');
            $('#tablet-menu-placement ul').css('display','none');
        });
        $('.skill-btn').on('click',function(){
            // Skill Bar Start

        //Progress Bar 1
        $("#web-design-progress-bar").circleProgress({
            value:0.9,
            thickness:4,
            fill:'#6d69e9',
            size:150,
            emptyFill:'#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progress-percentage').html(Math.round(90 * progress) + '<i>%</i>');
        });

        //Progress Bar 2
        $("#graphic-design-progress-bar ").circleProgress({
            value:0.95,
            thickness:4,
            fill:'#6d69e9',
            size:150,
            emptyFill:'#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progress-percentage').html(Math.round(95 * progress) + '<i>%</i>');
        });

        // Progress Bar 3
        $("#digital-marketing-progress-bar ").circleProgress({
            value:0.84,
            thickness:4,
            fill:'#6d69e9',
            size:150,
            emptyFill:'#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progress-percentage').html(Math.round(84 * progress) + '<i>%</i>');
        });

        // Progress Bar 4
        $("#communication-progress-bar ").circleProgress({
            value:0.8,
            thickness:4,
            fill:'#6d69e9',
            size:150,
            emptyFill:'#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progress-percentage').html(Math.round(80 * progress) + '<i>%</i>');
        });

//Skill Bar End 
        })



    //Trigger Button
        //Contact Pop Up Trigger
        $('.contact-btn').on('click', function(){
            $('.overlay').addClass('active');
            $('.form-wrapper').addClass('active');
            return false;
        });
        
        $('.contact-close-trigger').on('click',function(){
            $('.overlay , .form-wrapper').removeClass('active');
        });


        //Progress Bar Pop Up Trigger
        $('.skill-btn').on('click', function(){
            $('.overlay').addClass('active');
            $('.skill-area').addClass('active');
            return false;
        });
        
        $('.skill-area-close-trigger').on('click',function(){
            $('.overlay , .skill-area').removeClass('active');
        })
        
        $('.overlay').on('click', function(){
            $(this).removeClass('active');
            $('.form-wrapper , .skill-area').removeClass('active');
        });

    //End of Trigger Button

    // Service Carousel
        $('.service-carousel').owlCarousel({
            items:3,
            loop:true,
            dots:true,
            nav:false,
            autoplay:true,
            autoplayTimeout:3500,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3,
                }
            }
        })

    //Testimonial Carousel
        $('.testimonial-carousel').owlCarousel({
            items:1,
            autoplay:true,
            autoplayTimeout:3500,
            autoplayHoverPause:true,
            dots:true,
            nav:false,
            loop:true,
            animateIn: 'pulse',
            animateOut: 'zoomOut'
        });
    
    //isotope Filter
        $(".filter-list li").on('click', function(){
            $(".filter-list li").removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $(".portfolio-items").isotope({ 
                filter: selector,
            });
            $('.portfolio-items').isotope({
                itemSelector:'.single-portfolio-item',
                masonry: {
                    columnWidth:'.single-portfolio-item',
                    horizontalOrder:true,
                },
                layoutMode: 'fitRows',
            });
            
        });


    //Magnific Popup
        $('.video-play-btn').magnificPopup({
            type:'video',
            removalDelay: 900,
        });
        
        $(".portfolio-popup").magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
      });


    // Scroll to Section by Clicking Mainmenu Button
        $('.about-button, .skill-button').on('click', function(){
            $("html, body").animate({scrollTop: $('#about-section').offset().top }, 1000);
            $('.mainmenu li a').removeClass('active');
            $(this).addClass('active');
            return false;
        });
        $('.service-button').on('click', function(){
            $("html, body").animate({scrollTop: $('#service-section').offset().top }, 1000);
            $('.mainmenu li a').removeClass('active');
            $(this).addClass('active');
            return false;
        });
        $('.portfolio-button').on('click', function(){
            $("html, body").animate({scrollTop: $('#portfolio-section').offset().top }, 1000);
            $('.mainmenu li a').removeClass('active');
            $(this).addClass('active');
            return false;
        });
        $('.testimonial-button').on('click', function(){
            $("html, body").animate({scrollTop: $('#testimonial-section').offset().top }, 1000);
            $('.mainmenu li a').removeClass('active');
            $(this).addClass('active');
            return false;
        });
        $('.contact-button').on('click', function(){
            $("html, body").animate({scrollTop: $('#footer-section').offset().top }, 1000);
            $('.mainmenu li a').removeClass('active');
            $(this).addClass('active');
            return false;
        });
        $('.hire-btn').on('click', function(){
            $("html, body").animate({scrollTop: $('#footer-section').offset().top }, 1000);
            $('.mainmenu li a').removeClass('active');
            $(this).addClass('active');
            return false;
        });



    //Headroom JS
        $('.header-area').headroom();


    // Back to Top JS
        $(window).scroll(function(){
            if ($(this).scrollTop()>150) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        })

        $('.back-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });
    });
}(jQuery));	