/* ---------------------------------------------
 ============ Widget Configure =================
 --------------------------------------------- */

(function($) {
     "use strict";

     // Show or Hide Header  Top Bar ( Menu and Search )
     var main_header_top_bar = getUrlParameter('header_top_bar');
     if ( main_header_top_bar ){

         if ( main_header_top_bar == "show" ){
             $('#header-top').removeClass('hidden');
         } else {
             $('#header-top').html('');
         }

     } else {
         if (typeof(Header_top_bar) != "undefined") {
             if ( Header_top_bar == "show" ){
                 $('#header-top').removeClass('hidden');
             } else {
                 $('#header-top').html('');
             }
         }
     }
   
	//Header Top Menu
	if (typeof(Header_top_menu) != "undefined") {
        var top_menu_items = '';
		for (var Url in Header_top_menu ) {
	         top_menu_items += "<li><a href='" + Header_top_menu[Url] + "'>" + Url + "</a></li>";
	     }
    	$('header.site-header .header-top-menu').append('<ul class="up-menu">'+top_menu_items+'</ul>');
    }

	//Social Profile Header
	if (typeof(Header_Social_Url) != "undefined") {

		for (var Url in Header_Social_Url ) {
	         if ( Url == "show" ) {
	             continue;
	         }
	         $('header.site-header .header-social > .social-link').append("<a target='blank' href='" + Header_Social_Url[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
	     }
         if ( Header_Social_Url['show'] == true ) {
            $('header.site-header .header-social').removeClass('hidden');
         }
    }

	//Social Profile Footer
	if (typeof(Footer_Social) != "undefined") {

		for (var Url in Footer_Social ) {
	         if ( Url == "show" ) {
	             continue;
	         }
	         $('footer.site-footer .petty-widget-middel .widget .social-link').append("<a target='blank' href='" + Footer_Social[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
	     }
         if ( Footer_Social['show'] == true ) {
            $('footer.site-footer .petty-widget-middel .widget .social-link').removeClass('hidden');
         }
    }
    



    //Header Author Widget
    if (typeof(Header_author_Widget) != "undefined") {
        if (Header_author_Widget['show'] === true) {
            $('#footer-top').removeClass('hidden');
            $('#header-bottom #main-author .author-name').html(Header_author_Widget['author_name']);
            $('#header-bottom #main-author .author-image').html('<img src="'+Header_author_Widget['image']+'" alt="'+Header_author_Widget['author_name']+'">');
            $('#header-bottom #main-author .author-title').html(Header_author_Widget['sub_title']);
            $('#header-bottom #main-author .author-sign').html('<img src="'+Header_author_Widget['sign_image_url']+'" alt="'+Header_author_Widget['author_name']+'">');
        }
    }

    //Instagram Widget
    if (typeof(Instagram_Widget) != "undefined") {
    	if (Instagram_Widget['show'] === true) {
    	    $('#instagram').removeClass('hidden');
    	    $('#instagram .instagram-title h6').html(Instagram_Widget['widget_title']);
    	}
    }

    //Footer left Widget
    if (typeof(Footer_left_Widget) != "undefined") {
        if (Footer_left_Widget['show'] === true) {
            $('footer.site-footer .petty-widget-left > .widget').removeClass('hidden');
            $('footer.site-footer .petty-widget-left .widget-title').html(Footer_left_Widget['title']);
            $('footer.site-footer .petty-widget-left .textwidget').html(Footer_left_Widget['description']);
        }
    }

    //Footer Middle Widget
    if (typeof(Footer_middle_Widget) != "undefined") {
        if (Footer_middle_Widget['show'] === true) {
            $('footer.site-footer .petty-widget-middel .widget_about_company').removeClass('hidden');
            $('#footer-middle .middle-widget .widget_about_company .widget-content').html('<img src="'+Footer_middle_Widget['image_url']+'" alt="Company logo" />'+Footer_middle_Widget['description']);
        }
    }

    //Footer Right Widget
    if (typeof(Footer_right_Widget) != "undefined") {
    	if (Footer_right_Widget['show'] === true) {
    	    $('footer.site-footer .petty-widget-right > .widget').removeClass('hidden');
    	    $('footer.site-footer .petty-widget-right .widget-title').html(Footer_right_Widget['title']);
    	    $('footer.site-footer .petty-widget-right .textwidget').html(Footer_right_Widget['description']);
    	}
    }

    //MailChimp Widget
    if (typeof(Mailchimp_Widget) != "undefined") {
        if (Mailchimp_Widget['show'] === true) {
            $('header .header-subscribe').removeClass('hidden');
            $('header .header-subscribe .modal-header .modal-title').html(Mailchimp_Widget['widget_title']);
            $('header .header-subscribe .modal-header').append('<p>' + Mailchimp_Widget['descriptions'] + '</p>');
            $("#newsletter-form").attr("action", "" + Mailchimp_Widget['action_url'] + "");
            $("header .header-subscribe .modal-body button#mc-embedded-subscribe").html(Mailchimp_Widget['button_text']);
        }
    }


    // Copyright Text
    if (typeof(Footer_CopyRight_Text) != "undefined") {
    	if (Footer_CopyRight_Text['copy_right_text'] !== "") {
    	    $('.copyright').html(Footer_CopyRight_Text['copy_right_text']);
    	} else {
    	    $('.copyright').html('<p>Copyright &copy; 2016 by <strong>softhopper</strong> </br> Made with love by <strong>Travelia</strong></p>');
    	}
    }


    //Contact us page
    if (typeof(Contact_Info) != "undefined") {
        var email_address = Contact_Info['email'];
        var web_address = Contact_Info['web'];
        $('.phone-area .details span').html(Contact_Info['phone']);
        $('.email-area .details span').html('<a href="mailto:'+email_address+'">'+email_address+'</a>');
        $('.web-area .details span').html('<a target="_blank" href="'+web_address+'">'+web_address+'</a>');
    }

    //About page
    if (typeof(About_Page_settings) != "undefined") {
        $('.about-me .author-details .author-name span').prepend(About_Page_settings['author_name']);

        $('.about-me .author-details .author-sign.radius-before').html('<img src="'+About_Page_settings['author_sign_img']+'" alt="'+About_Page_settings['author_name']+'">');


        for (var Url in About_Page_settings) {
            if ( Url == "author_name" || Url == "author_sign_img" ) {
                continue;
            }
            $('.about-me .author-details .follow-link').append("<a href='" + About_Page_settings[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
        }
    }
   
        
})(jQuery);