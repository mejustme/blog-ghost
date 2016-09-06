

/*=================================================
==============  Get URL Parameter =================
================================================= */
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/*===============================================================
-------------- Universal settings for Petty theme ---------------
=================================================================*/
//Header Top Bar
var Header_top_bar = "show";
    
// Header Top Menu   
var Header_top_menu = {
    "Home" : "http://petty.ghostexpert.net/",
    "About" : "http://petty.ghostexpert.net/about",
    "Contact" : "http://petty.ghostexpert.net/contact",
    // You may add more.........
}

//Pre-Loader
var Pre_Loader = {
    show: false, // To show Pre-Loader make it "true" and to hide make "false". 
    animation_icon: 1 // Ta change animation you can use 1 - 5  ( five type animation icon available )
};

// this code for ghost dynamic menu
var dynamic_ghost_nav = false;

//Post Style
var theme_post_style = 1; // Post Style for default bolg post section (1, 2, 3, 4 or 5)

//Author Page Post Style
var author_post_style = 1; // Post Style for Author page (1, 2, 3, 4 or 5)

//Tag Page Post Style
var tag_post_style = 1; // Post Style for Tag page (1, 2, 3, 4 or 5)


//disqus shortname
var disqus_shortname = "josephine-ghost"; // disqus shortname from disqus.com account. 


/*===============================================================
---------------- Home page slider post settings -----------------
=================================================================*/
//Code To Select featured Sliding Post Tag
var Sticky_Post = {
    show: true, // To show Home-Page slider make it "true" and to hide make "false".
    style: 1, // Here are two sticky post slider style. you can use one or two ( 1 or 2 )
    post_count : 5,
    autoplay : true,
    title : "Welcome to the online portfolio and Traveling <br/> of Johan Smith,  -   in Cityname, State",
};


/*===============================================================
----------------- Header Author Widget Settings -----------------
=================================================================*/    
//Header Author Widget
var Header_author_Widget = {
    "show" : true,
    "image" : "http://josefine.softhopper.net/wp-content/uploads/2016/04/about-me.jpg", // Author Image URL
    "author_name" : "Mickle Jhon", //Author Name
    "sub_title" : "I am <span>Traveler</span>",
    "sign_image_url" : "/assets/images/author/sign.png", //Google-Plus
};


/*===============================================================
------------- Social profiles for Header and Footer -------------
=================================================================*/
// Header and Footer Social Profile Settings
var Header_Social_Url = {
    "show" : true,
    "facebook": "http://www.facebook.com", //Facebook
    "twitter": "http://www.twitter.com", //Twitter
    "linkedin": "http://www.linkedin.com", //LinkedIn
    "behance": "http://www.behance.com", //Behance
    "google-plus": "http://plus.google.com", //Google-Plus
    //You may add more ........
};

// Footer Social Aria
var Footer_Social = {
    "show" : true,
    "facebook": "http://www.facebook.com",
    "twitter": "http://www.twitter.com",
    "linkedin": "http://www.linkedin.com",
    "behance": "http://www.behance.com",
    "google-plus": "http://plus.google.com",
    "dribbble": "http://www.dribbble.com",
};


/*===============================================================
--------------------- Contact Page Settings ---------------------
=================================================================*/
// Code Contact Page Information
var Contact_Info = {
    phone: "+08-987654321", //Phone Number
    fax: "+08-862225632", //Fax Number
    email: "petty@domain.com", //Email Address
    web: "http://www.domain.com", //Website URL
    map_latitude: "-37.814107", //Google Map Latituder
    map_longitude: "144.963280", //Google Map Longitude
    map_icon: "http://bit.ly/map-pointer", // Map Pointer URL
    contact_email : "ghostexpert247@gmail.com",
};


/*===============================================================
----------------------- About Page Settings ---------------------
=================================================================*/
 // About Page Genarel Settings
 var About_Page_settings = {
     "author_name" : "I am Mr. Mikhel Jhon Smith", //Author Name
     "author_sign_img" : "/assets/images/author-sing.png", //Author Signature img URL
     "author_sign_text" : "Mikhel Jhon", //Author Signature Text Format

     //Social Profiles
     "facebook" : "http://www.fb.com/", //Facebook 
     "twitter" : "http://www.twitter.com/", //Twitter
     "git" : "http://www.github.org/", //GitHub
     "instagram" : "http://www.instagram.com", //Instagram
     "behance" : "http://www.behance.com", //Behance
     "flickr" : "http://www.flickr.com", //Flickr
     "google-plus" : "http://www.google-plus.com", //Google-Plus
     //You may add more.......
 };


//Header MailChimp Settings
var Mailchimp_Widget = {
    show: true, //Show or hide this Button (true for show and false for hide)
    widget_title: "Our Newsletter", //Title
    descriptions: "Signup for our news letter and get updates of our new post in your inbox", // Description text
    action_url: "http://softhopper.us11.list-manage.com/subscribe/post?u=559ff170eee6949a359c40740&id=fbbd18e68b", //From Action URL
    button_text: "send", //Submit Button Text
};


/*===============================================================
------------- Settings For The Footer Section -------------------
=================================================================*/
//Footer Instagram Gallery Section
var Instagram_Widget = {
    show: true, //Show or hide this widget (true for show and false for hide)
    widget_title: "Instagram feed", //Widget Title
    user_id: 2070535567,
    access_token: "2070535567.a49315a.7e681503c94f4daeb5dbd8e7d594512e"
};

//Left Widget Of Footer
var Footer_left_Widget = {
    "show" : true,
    "title" : "Contact",
    "description" : '<p>+093 01812 45846582<br><a target="_blank" href="http://ghostexpert.net">http://ghostexpert.net</a></p>'
}

//Middle Widget Of Footer
var Footer_middle_Widget = {
    "show" : true,
    "image_url" : "/assets/images/logo.png",
    "description" : '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas officia possimus rem, cum eaque, dolorem non natus accusantium reiciendis nulla nam, rerum iusto excepturi ipsam sapiente ullam provident autem voluptatibus</p>'
}

//Right Widget Of Footer
var Footer_right_Widget = {
    "show" : true,
    "title" : "Location",
    "description" : '<p>Melborne 15 Number Stap Area <br> Australia </p>'
}

/*===============================================================
---------------------- Footer Copy Right Text -------------------
=================================================================*/
//Footer Copy Right Text
var Footer_CopyRight_Text = {
    copy_right_text: "<p>Copyright &copy; 2016 by <strong>GhostExpert</strong> </br> Made with love by <strong>Petty</strong></p>"//Fotter Copy Right Text

};
