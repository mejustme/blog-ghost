(function ($) {
	"use strict";
    
    var pettyApp = {
        
        /* ---------------------------------------------
         Menu
         --------------------------------------------- */
        menu: function() {
            var combinedmenu = $('#site-nav ul.menu-list').clone();
            combinedmenu.appendTo('#mobile-menu #mobile-menu-wrap');

            var items = $('.overlaybg, .slideLeft'),
                menucontent = $('.menucontent'),
                submenu = $('.menu-list li').has('.menu-submenu'),
                menuopen = function() {
                    $(items).removeClass('menuclose').addClass('menuopen');
                },
                menuclose = function() {
                    $(items).removeClass('menuopen').addClass('menuclose');
                };
            $('#navtoggole-main').on('click', function() {
                if (menucontent.hasClass('menuopen')) {
                    $(menuclose);
                } else {
                    $(menuopen);
                }
            });
            menucontent.on('click', function() {
                if (menucontent.hasClass('menuopen')) {
                    $(menuclose);
                }
            });
            if (submenu) {
                $('.menu-submenu').prev().append('<span class="fa fa-angle-down"></span>');
            }
            submenu.prepend('<span class="menu-click"><i class="menu-arrow fa fa-plus"></i></span>');
            $('.menu-mobile').on('click', function() {
                $('.menu-list').slideToggle('slow');
            });
            $('.menu-click').on('click', function() {
                $(this).siblings('.menu-submenu').slideToggle('slow');
                $(this).children('.menu-arrow').toggleClass('menu-extend');
            });

            $('ul.menu-list li a').each(function() {
                if ($(this).attr('href') + "/" === document.URL || $(this).attr('href') === document.URL) {
                    $(this).addClass('active');
                }
            });

            var soical_mobile = $('#header-middle .header-social .social-link a').clone().appendTo('#header-bottom .mobile-share #social-container');
        },    

        
        /* ---------------------------------------------
         Background Fit Image
         --------------------------------------------- */
        background_fit_image: function() {
            $.fn.bgImage = function() {
                $(this).each(function() {
                    var $image = $(this).find('img');
                    var imageSource = $image.attr('src');
                    $image.css('visibility','hidden');
                    $(this).css('backgroundImage', 'url(' + imageSource + ')');
                    if(!$image.length) {
                        $(this).css('backgroundImage', 'none');
                    }                    
                });
            };  
            $('.post-thumb-img').bgImage();
            $('.image-wrap').bgImage();
        },
        
        
        /* ---------------------------------------------
         Home Version Grid Masonry
         --------------------------------------------- */
        grid_masonry: function() {
            var $container = jQuery('#masonry-layout');
            $container.masonry({
                itemSelector: '.grid'

            });    
            $(window).on('load', function(){

            var $container_two = jQuery('.single-row-col');
            $container.masonry({
                itemSelector: '[class*="col-"]'

            });
            });         
        },
        
        /* ---------------------------------------------
         MailChimp
         --------------------------------------------- */
        mailchip: function() {
            if ($("#newsletter-form").length) {
                $("#newsletter-form").formchimp();
            }
        },
        
        /* ---------------------------------------------
         Instagram Image
         --------------------------------------------- */
        instafeed: function () {
            if ($('#instafeed').length > 0) {
                var userFeed = new Instafeed({
                    limit: 9,
                    get: 'user', // Get your Instagram Photo. Use - 'user' or 'tagged'
                    //tagName: 'awesome', // Use your tag, unmarked this if get photo with tag
                    userId: Instagram_Widget['user_id'], //Your user ID
                    accessToken: Instagram_Widget['access_token'], //Your Access token on Instagram
                    resolution: 'standard_resolution',
                    template: '<div class="list"><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></div>'
                });
                userFeed.run();
            }
        },
        
        /* ---------------------------------------------
         Maps
        --------------------------------------------- */
        maps: function() {
            if ($('#gmaps').length) {
                var map;
                if (typeof(Contact_Info) != "undefined") {
                    var latitude = Contact_Info['map_latitude'];
                    var longitude = Contact_Info['map_longitude'];
                    var icon = Contact_Info['map_icon'];
                } else {
                    var latitude = 43.04446;
                    var longitude = -76.130791;
                    var icon = "/assets/images/map-icon.png";
                }

                map = new GMaps({
                    el: '#gmaps',
                    lat: latitude, //Google Maps Latitude
                    lng: longitude, //Google Maps longitude
                    scrollwheel: false,
                    zoom: 10,
                    zoomControl: true,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });

                var image = icon; //Configure Maps Marker Icon
                map.addMarker({
                    lat: latitude, //Google Maps Latitude
                    lng: longitude, //Google Maps longitude
                    icon: image,
                    animation: google.maps.Animation.DROP,
                    verticalAlign: 'bottom',
                    horizontalAlign: 'center'
                });
            }
        },
        
        /* ---------------------------------------------
         Scroll Top
         --------------------------------------------- */
        scroll_top:function scrolltop() {
            var duration = 700;
            $('.scroll-top a').click(function(event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: 0}, duration);
                return false;
            });
        },

        /* ---------------------------------------------
         Contact Form
         --------------------------------------------- */
        contact_form: function () {
            if ($('#contact-form-wrap').length) {
                if (typeof(disqus_shortname) != "undefined") {
                    var contact_email = Contact_Info['contact_email'];
                } else {
                    var contact_email = 'email@domain.com';
                }

                var $contactForm = $('#contact_form');
                var $contactFormUrl = $contactForm.attr('action');
                $contactForm.submit(function(e) {
                    e.preventDefault();
                    $.ajax({
                        url: '//formspree.io/'+ contact_email +'',
                        method: 'POST',
                        data: $(this).serialize(),
                        dataType: 'json',
                        beforeSend: function() {
                            $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
                        },
                        success: function(data) {
                            $contactForm.find('.alert--loading').hide();
                            $contactForm.append('<div class="alert alert--success">Message sent!</div>');
                        },
                        error: function(err) {
                            $contactForm.find('.alert--loading').hide();
                            $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
                        }
                    });
                });
            }
        },

        /* ---------------------------------------------
         Ghost Search
         --------------------------------------------- */
        ghost_search: function () {
            if ($('.heading-search').length) {

                $(".heading-search").ghostHunter({
                   results: ".heading-search-result",
                   onKeyUp: true,
                   zeroResultsInfo: false,
                   info_template: "<div class='post-amount'>Number of posts found: {{amount}}</div>",
                   result_template: "<div class='results'><h4><a href='{{link}}'>{{title}}</a></h4><span>{{pubDate}}</span>{{description}}</div>"
                });

            }
        },

        /* ---------------------------------------------
         Ghost Releted Post
         --------------------------------------------- */
        ghost_releted_post: function () {
            if ($('#related-post-wrap').length) {

                $('#related-post-wrap').ghostRelated({
                   limit: 3
                });

            }
        },


        /* ---------------------------------------------
         Preloader
         --------------------------------------------- */
        preloader: function() {
            $(window).on('load', function () {
                $("body").imagesLoaded(function () {
                    $('.preloader').delay(500).slideUp('slow', function () {
                        $(this).remove();
                    });
                });
            });
        },
        /* ---------------------------------------------
         Comments count
         --------------------------------------------- */
        comment_count: function() {
            if (typeof( disqus_shortname ) != "undefined") {
                var s = document.createElement('script');
                s.async = true;
                s.type = 'text/javascript';
                s.src = '//' + disqus_shortname + '.disqus.com/count.js';
                (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);

            }
        },
        /* ---------------------------------------------
         Header Logo Padding Satting
         --------------------------------------------- */
        /*header_padding: function() {
            if (typeof(Header_Padding) != "undefined") {
                var padding_top = (!Header_Padding['top'] ) ? '70px' : Header_Padding['top'];
                var padding_right = (!Header_Padding['right'] ) ? '0px' : Header_Padding['right'];
                var padding_bottom = (!Header_Padding['bottom'] ) ? '0px' : Header_Padding['bottom'];
                var padding_left = (!Header_Padding['left'] ) ? '0px' : Header_Padding['left'];

                $('#site-logo-main').css('padding', padding_top+' '+padding_right+' '+padding_bottom+' '+padding_left);
            }
        },*/
        
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {
            pettyApp.menu();
            pettyApp.background_fit_image();
            pettyApp.grid_masonry();
            pettyApp.mailchip();
            pettyApp.instafeed();
            pettyApp.maps();
            pettyApp.scroll_top();
            pettyApp.contact_form();
            pettyApp.ghost_search();
            pettyApp.ghost_releted_post();
            pettyApp.preloader();
            pettyApp.comment_count();
            //pettyApp.header_padding();
        }
    };
    
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        pettyApp.initializ();
    });
    
    
})(jQuery);




