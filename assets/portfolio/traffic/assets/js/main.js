(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $('.homepage-slides').owlCarousel({
            items:1,
            loop:true,
            dots:false,
            nav:true,
            navText:["<i class='zmdi zmdi-arrow-left'></i>","<i class='zmdi zmdi-arrow-right'></i>"]
        });

        $('.case-study-carousel').owlCarousel({
            items:3,
            margin:30,
            loop:true,
            dots:true,
            nav:false,
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
        });

        $('.case-study-carousel-2').owlCarousel({
            items:5,
            loop:true,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                992:{
                    items:5,
                }
            }
        });

        $('.testimonial-carousel').owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false
        });

        $('.logo-carousel').owlCarousel({
            loop:true,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                768:{
                    items:4
                },
                992:{
                    items:6,
                }
            }
        });

        $('.wide-layout').on('click',function(){
            $('body').removeClass('boxed');
            $('.boxed-layout,.wide-layout,.site-wrapper').removeClass('active');
            $(this).addClass('active'); 
        });
        $('.boxed-layout').on('click',function(){
            $('.boxed-layout,.wide-layout').removeClass('active');
            $(this).addClass('active'); 
            $('.site-wrapper').addClass('active');
            $('body').addClass('boxed');
        });

        $('.search-trigger').on('click', function(){
            $('.search-show-btn').addClass('hide-search-btn');
            $('.search-form').addClass('active');
            $('.off-canvas-overlay').addClass('active');
            $('.search-only-z-index').addClass('active');
        });
        $('.off-canvas-overlay ').on('click', function(){
            $('.search-form').removeClass('active');
            $('.off-canvas-overlay').removeClass('active');
            $('.search-show-btn').removeClass('hide-search-btn');
            $('.search-only-z-index').removeClass('active');
        });

        $('.menu-trigger').on('click', function(){
            $('.off-canvas-menu-area').addClass('show-off-canvas-area');
            $('.off-canvas-overlay').addClass('active');
        });
        $('.menu-close, .off-canvas-overlay ').on('click', function(){
            $('.off-canvas-menu-area').removeClass('show-off-canvas-area');
            $('.off-canvas-overlay').removeClass('active');
        });

        $('.theme-4 .single-testimonial-item').hover(function(){
            $('.theme-4 .single-testimonial-item').removeClass('active');
            $(this).addClass('active');
        });
        $('.video-play-btn').magnificPopup({
            type:'video'
        });
        $('.video-play-btn-1').magnificPopup({
            type:'video'
        });

        $('#tablet-menu').slicknav({
            prependTo:'#tablet-menu-placement',
            allowParentLinks:true,
        });

        new WOW().init();
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	