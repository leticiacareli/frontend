/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';
import 'owl.carousel';
import mixitup from 'mixitup';



    /*------------------
        Preloader
    --------------------*/
    export function preloader(){
        $(window).on('load', function () {
            $(".loader").fadeOut();
            $("#preloder").delay(200).fadeOut("slow");

            $('.featured__controls li').on('click', function () {
                $('.featured__controls li').removeClass('active');
                $(this).addClass('active');
            });
            if ($('.featured__filter').length > 0) {
                var containerEl = document.querySelector('.featured__filter');
                var mixer = mixitup(containerEl);
            }
        });
    }
        

    /*------------------
        Background Set
    --------------------*/
    export function setBg(){
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }

    export function humberger(){
        $(".humberger__open").on('click', function () {
            $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
            $(".humberger__menu__overlay").addClass("active");
            $("body").addClass("over_hid");
        });
    
        $(".humberger__menu__overlay").on('click', function () {
            $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
            $(".humberger__menu__overlay").removeClass("active");
            $("body").removeClass("over_hid");
        });
    }
    
    /*------------------
		Navigation
	--------------------*/
    export function navigation(){
        $(".mobile-menu").slicknav({
            prependTo: '#mobile-menu-wrap',
            allowParentLinks: true
        });
    }

    /*-----------------------
        Categories Slider
    ------------------------*/
    export function categoriesSlider(){
        $(".categories__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 4,
            dots: false,
            nav: true,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            responsive: {
    
                0: {
                    items: 1,
                },
    
                480: {
                    items: 2,
                },
    
                768: {
                    items: 3,
                },
    
                992: {
                    items: 4,
                }
            }
        });

        $('.hero__categories__all').on('click', function(){
            $('.hero__categories ul').slideToggle(400);
        });
    }

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    export function latestProductSlider(){
        $(".latest-product__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            nav: true,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });
    }
    
    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    export function productDiscountSlider(){
        $(".product__discount__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 3,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            responsive: {
    
                320: {
                    items: 1,
                },
    
                480: {
                    items: 2,
                },
    
                768: {
                    items: 2,
                },
    
                992: {
                    items: 3,
                }
            }
        });
    }

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    export function productDetailsSlider(){
        $(".product__details__pic__slider").owlCarousel({
            loop: true,
            margin: 20,
            items: 4,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });
    }
    
    /*-----------------------
		Price Range Slider
	------------------------ */
    export function rangeSlider(){
        var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
        rangeSlider.slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [minPrice, maxPrice],
            slide: function (event, ui) {
                minamount.val('$' + ui.values[0]);
                maxamount.val('$' + ui.values[1]);
            }
        });
        minamount.val('$' + rangeSlider.slider("values", 0));
        maxamount.val('$' + rangeSlider.slider("values", 1));
    }
    

    /*--------------------------
        Select
    ----------------------------*/
    export function niceSelect(){
        $("select").niceSelect();
    }
    

    /*------------------
		Single Product
	--------------------*/
    export function singleProduct(){
        $('.product__details__pic__slider img').on('click', function () {

            var imgurl = $(this).data('imgbigurl');
            var bigImg = $('.product__details__pic__item--large').attr('src');
            if (imgurl != bigImg) {
                $('.product__details__pic__item--large').attr({
                    src: imgurl
                });
            }
        });
    }
    

    /*-------------------
		Quantity change
	--------------------- */
    export function quantityChange(){
        var proQty = $('.pro-qty');
        proQty.prepend('<span class="dec qtybtn">-</span>');
        proQty.append('<span class="inc qtybtn">+</span>');
        proQty.on('click', '.qtybtn', function () {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });
    }
    