var urlLoc = document.getElementById("site-logo-main").getAttribute("href");
var themeApp = {
    gatherData: function(e, t, a) {
        var e = e || 1,
            t = t || "",
            a = a || [],
            i = this,
            s = "" + urlLoc + "/rss";
        $.ajax({
            url: s,
            type: "get",
            success: function(s) {
                var n = $(s).find("item > guid").text();
                t != n ? ($(s).find("item").each(function() {
                    a.push(this)
                }), i.gatherData(e + 1, n, a)) : (i.specialPostsSetOne(a), i.recentPosts(a), i.tagcloud(a))
            }
        })
    },
    taggedPost: function(e, t) {
        var a = [];
        return $.each(e, function(e, i) {
            var s = [],
                n = [];
            $(i).find("category").each(function() {
                s.push($(this).text()), n.push($(this).text().toLowerCase())
            }), n.indexOf(t.toLowerCase()) >= 0 && a.push({
                link: $(i).find("link").text(),
                title: $(i).find("title").text(),
                content: $(i).find("content\\:encoded, encoded").text(),
                author: $(i).find("dc\\:creator, creator").text(),
                category: $(i).find("category"),
                published_date: $(i).find("pubDate").text(),
                image_link: $(this).find("media\\:content, content").attr("url"),
            })
        }), a
    },

    specialPostsSetOne: function(e) {
        var special_tag_one = 'sticky';
        if (typeof(Sticky_Post) != "undefined") {
            var tag_one_post_count = Sticky_Post['post_count'];
        } else {
            var tag_one_post_count = 5;
        }
        if ($("#featuared").length && "undefined" != typeof special_tag_one && "undefined" != typeof tag_one_post_count) {
            var t = themeApp.taggedPost(e, special_tag_one),
                a = "";
            if (t.length > 0) {

                var featured_post_style = getUrlParameter('sticky_post_style');
                var hide_featured_post = getUrlParameter('hide_sticky');

                if (featured_post_style) {
                    var featured_style = featured_post_style;
                } else {
                    if (typeof(Sticky_Post) != "undefined") {
                        var featured_style = Sticky_Post['style'];
                    } else {
                        var featured_style = 2;
                    }
                }

                if ( hide_featured_post == 1 ) {
                    $('#featuared').html('');
                } else {
                    if ( Sticky_Post['show'] == true ) {
                        $('#featuared').removeClass('hidden');
                        $('#featuared .featuare-title').html( '<h4>' + Sticky_Post['title'] + '</h4>' );
                    } else {
                        $('#featuared').html('');
                    }
                }


                //Condition for autoplay
                if ( typeof( Sticky_Post['autoplay'] ) != "undefined" ) {
                    var featured_autoplay = Sticky_Post['autoplay'];
                } else {
                    var featured_autoplay = false;
                }

                


                if ( featured_style == 1 ) {

                    for (a = '<div id="featuare-slider" class="owl-carousel">', i = 0; i < t.length; i++)
                        if (i < tag_one_post_count) {
                            var s = t[i].title,
                                n = t[i].link,
                                o = t[i].image_link,
                                m = t[i].author,
                                c = t[i].category,
                                r = themeApp.formatDate(t[i].published_date),
                                l = $(t[i].content).text().replace("<code>", "<code>").replace("<", "<").replace(">", ">"),
                                l = l.split(/\s+/).slice(0, 50).join(" "),
                                d = "",
                                p = "";
                            if ("undefined" != typeof o) {
                                var thumbnail = '<div class="post-thumb post-thumb-img" style="background-image:url(' + o + ')"><img src="' + o + '" alt="' + s + '"></div>'  
                            } else {
                                var thumbnail = '<div class="post-thumb post-thumb-img" style="background-image:url(/assets/images/no-thumb/layout-one.jpg)"><img src="/assets/images/no-thumb/layout-one.jpg" alt="' + s + '"></div>'
                            }
                            "undefined" != typeof c && $.each(c, function(e, t) {
                                var a = $(t).text(),
                                    i = a.toLowerCase().replace(/ /g, "-");
                                p += '<a href="' + urlLoc + '/tag/' + i + '/">' + a + "</a>"
                            }), d = "undefined" != typeof o ? '' : '<div class="featured-media"><div class="tag-list">' + m + "</div></div>", a += '<div class="item">'+thumbnail+'<div class="post-content"><div class="cat-links">' + p + '</div><div class="bottom-content"><h2 class="entry-title"><a rel="bookmark" href="' + n + '">' + s + '</a></h2><div class="entry-meta"><span class="entry-date">' + r + '</span><span class="author vcard"> By: ' + m + '</span></div></div></div></div>';

                        }
                        a += "</div>", $("#featured-contents").append(a);
                } else if ( featured_style == 2 ) {

                    $('#featuared').removeClass('featuare-full-width').addClass('featuare-center');
                    for (a = '<div id="featuare-center" class="owl-carousel">', i = 0; i < t.length; i++)
                        if (i < tag_one_post_count) {
                            var s = t[i].title,
                                n = t[i].link,
                                o = t[i].image_link,
                                m = t[i].author,
                                c = t[i].category,
                                r = themeApp.formatDate(t[i].published_date),
                                l = $(t[i].content).text().replace("<code>", "<code>").replace("<", "<").replace(">", ">"),
                                l = l.split(/\s+/).slice(0, 50).join(" "),
                                d = "",
                                p = "";
                            if ("undefined" != typeof o) {
                                var thumbnail = '<div class="post-thumb post-thumb-img" style="background-image:url(' + o + ')"><img src="' + o + '" alt="' + s + '"></div>'  
                            } else {
                                var thumbnail = '<div class="post-thumb post-thumb-img" style="background-image:url(/assets/images/no-thumb/layout-one.jpg)"><img src="/assets/images/no-thumb/layout-one.jpg" alt="' + s + '"></div>'
                            }
                            "undefined" != typeof c && $.each(c, function(e, t) {
                                var a = $(t).text(),
                                    i = a.toLowerCase().replace(/ /g, "-");
                                p += '<a href="' + urlLoc + '/tag/' + i + '/">' + a + "</a>"
                            }), d = "undefined" != typeof o ? '' : '<div class="featured-media"><div class="tag-list">' + m + "</div></div>", a += '<div class="item">'+thumbnail+'<div class="post-content"><div class="cat-links">' + p + '</div><div class="bottom-content"><h2 class="entry-title"><a rel="bookmark" href="' + n + '">' + s + '</a></h2><div class="entry-meta"><span class="entry-date">' + r + '</span><span class="author vcard"> By: ' + m + '</span></div></div></div></div>';

                        }
                            a += "</div>", $("#featured-contents").append(a);

                }
            }
            //var featcarousel = $('#featured-slider'),
                var item = 4;
                $('#featuare-slider').owlCarousel({
                    center: false,
                    items: item,
                    autoplay: featured_autoplay,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    singleItem: false,
                    loop: true,
                    margin: 7,
                    nav: true,
                    dots: true,
                    navText: ["<div>prev</div>", "<div>next</div>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 2
                        },
                        600: {
                            items: 2
                        },
                        700: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        800: {
                            items: 4
                        },
                        1000: {
                            items: 5
                        },
                        1200: {
                            items: item
                        },
                        1400: {
                            items: item
                        }
                    }
                });   

                //featured-two center
                var item = 4;
                $('#featuare-center').owlCarousel({
                    center: false,
                    items: item,
                    autoplay: featured_autoplay,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    singleItem: false,
                    loop: true,
                    margin: 7,
                    nav: true,
                    dots: true,
                    navText: ["<div>prev</div>", "<div>next</div>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        800: {
                            items: 3
                        },
                        1000: {
                            items: 4
                        },
                        1200: {
                            items: item
                        },
                        1400: {
                            items: item
                        }
                    }
                });
        }
    },


    recentPosts: function(e) {
        if (typeof(Latest_Posts_Widget) != "undefined") {
            var recent_post_count = Latest_Posts_Widget['post_count'];
            var container = $(".latest-widget");
            if (container.length && typeof recent_post_count !== 'undefined') {
                var string = '';
                $(e).slice(0, recent_post_count).each(function() {
                    var link = $(this).find('link').text();
                    var title = $(this).find('title').text();
                    var tag = $(this).find("category").text();
                    var published_date = themeApp.formatDate($(this).find('pubDate').text());
                    var image_link = $(this).find('media\\:content, content').attr('url');
                    if (typeof image_link !== 'undefined') {
                        var image = '<figure class="fit-img"><img alt="'+title+'" src="'+image_link+'"></figure>';
                        var helper_class = 'have-image';
                    } else {

                        var image = '<div class="post-thumb"><figure class="fit-img"><img alt="' + title + '" class="latest-item-thumb" src="' + urlLoc + '/assets/images/no-media/image.jpg"></figure></div>';
                    }
                    
                    var helper_class = '';
                    
                    string += '<li class="feed-wrapper'+helper_class+'"><div class="content"><div class="image-area"><a rel="bookmark" href="'+link+'">'+image+'</a></div><div class="item-text"><h5><a rel="bookmark" href="'+link+'">'+title+'</a></h5><span class="item-meta">'+published_date+'</span></div></div></li>'
                });
                container.append(string);
            }
        }
    },
    formatDate: function(e) {
        var t = new Date(e),
            a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            i = a[t.getMonth()],
            s = t.getDate(),
            n = t.getFullYear(),
            o = i + " " + s + ", " + n;
        return o
    },
    tagcloud: function(e) {
        var t = [];
        $(e).find("category").each(function() {
            var e = $(this).text(); - 1 == $.inArray(e, t) && t.push(e)
        });
        for (var a = "", i = 0; i < t.length; i += 1) {
            var s = t[i],
                n = s.toLowerCase().replace(/ /g, "-");
            if (n === "full-width" || n === "sidebar-left" || n === "sidebar-right") {
                continue;
            }
            a += '<a href="' + urlLoc + '/tag/' + n + '">' + s + "</a>"
        }
        $(".tagcloud").append(a)
    },
    init: function() {
        themeApp.gatherData()
    }
};
themeApp.init();

