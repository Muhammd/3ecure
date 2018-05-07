    $(function() {
        'use strict';

        // --------------------------
        // Global Variables
        // --------------------------
        var $this = $(this),
            nul = $('nav ul li'),
            ha = $("header .arrow"),
            sl = $('.skill-line');

        // --------------------------
        // Customiser - Uncomment to Activate
        // --------------------------
        // $('body').append('<div id="cu"></div>');
        // $('#cu').load('master/customiser/cu.html');

        // --------------------------
        // Check navigation for children
        // --------------------------
        nul.each(function() {
            var $this = $(this);
            if ($this.children('ul').length > 0) {
                $this.addClass('parent');
            }
            if ($this.children('ul.mega').length > 0) {
                $this.addClass('mega-parent');
            }
        });

        var navpos = $('nav').find('.parent > a');
        navpos.on('click', function(e) {
            e.preventDefault();
            var ww = $(window).width();
            if (ww < 991) {
                $(this).siblings('ul').slideToggle('500',
                    'swing');
            } else if ($('nav').hasClass('minimal')) {
                $(this).siblings('ul').slideToggle('500',
                    'swing');
            } else {
                return false;
            }
            return false;
        });

        // --------------------------
        // Trigger after scroll finish
        // --------------------------
        $(window).on('resize', function() {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function() {
                $(this).trigger('resizeEnd');
            }, 200);
        });

        $(window).on('resizeEnd', function() {
            var ww = $(window).width(),
                body = $('body');
            if (ww > 991) {
                body.removeClass('modal-open');
            }
            var masonry = $('.masonry');
            if (masonry.length > 0) {
                masonry.masonry('layout');
            }
            var blog = $('.blog');
            if (blog.length > 0) {
                blog.masonry('layout');
            }
        });

        // --------------------------
        // Minimal & Mobile Menu Functionality
        // --------------------------
        $('nav li.parent a').on('click', function() {
            var $this = $(this);
            $this.parent().toggleClass('open');
        });

        // --------------------------
        // Fade In on Load
        // --------------------------
        $(window).on('load', function() {
            $('.web-in').addClass('fade-in');
        });

        // --------------------------
        // Parallax
        // --------------------------
        $('.parallax').parallax();

        // --------------------------
        // Portfolio Masonry
        // --------------------------
        $(window).on('load', function() {
            var masonry = $('.masonry');
            if (masonry.length > 0) {
                masonry.masonry({
                    itemSelector: '.grid-item',
                    transitionDuration: '0',
                    resize: false,
                    columnWidth: '.grid-sizer',
                    percentPosition: true
                });
            }
        });

        // --------------------------
        // Blog Masonry
        // --------------------------
        $(window).on('load', function() {
            var blog = $('.blog');
            if (blog.length > 0) {
                blog.masonry({
                    itemSelector: '.blog-item',
                    transitionDuration: '0',
                    resize: false,
                    columnWidth: '.blog-sizer',
                    percentPosition: true
                });
            }
        });

        // --------------------------
        // Smart Sticky Header
        // --------------------------
        var nav = new Headroom(document.querySelector("nav"), {
            tolerance: {
                up: 15,
                down: 50
            },
            offset: 450,
            classes: {
                initial: "initial",
                pinned: "fixed",
                unpinned: "unfixed"
            }
        });
        nav.init();

        // --------------------------
        // Arrow Down Click
        // --------------------------
        function arrowDown() {
            ha.on("click", function() {
                var banner = $(this).parent().height();
                $("html, body").animate({
                    scrollTop: banner
                }, 450);
                return false;
            });
        }
        arrowDown(); // Initialize arrowDown on document ready

        // --------------------------
        // Logo Slider - Owl Carousel
        // --------------------------
        $('#c_logos .slide, .logo-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 2500,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        });

        // --------------------------
        // Testimonials - Owl Carousel
        // --------------------------
        $('#c_testimonials .slider').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000
        });

        // --------------------------
        // Loop Center - Owl Carousel
        // --------------------------
        $('.center-loop').owlCarousel({
            center: true,
            animateOut: 'fadeOut',
            dots: true,
            items: 2,
            loop: true,
            margin: 30,
            responsive: {
                600: {
                    items: 4
                }
            }
        });

        // --------------------------
        // Loop Center w/ Fade - Owl Carousel
        // --------------------------
        $('.center-loop-fade').owlCarousel({
            center: true,
            animateOut: 'fadeOut',
            dots: true,
            items: 2,
            loop: true,
            margin: 10,
            responsive: {
                800: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });

        // --------------------------
        // Non Loop Center - Owl Carousel
        // --------------------------
        $('.center-nonloop').owlCarousel({
            center: true,
            animateOut: 'fadeOut',
            dots: true,
            items: 2,
            loop: false,
            margin: 30,
            responsive: {
                600: {
                    items: 4
                }
            }
        });

        // --------------------------
        // Non Loop Center - Owl Carousel
        // --------------------------
        $('.center-nonloop-autowidth').owlCarousel({
            center: true,
            autoWidth: false,
            animateOut: 'fadeOut',
            dots: true,
            items: 2,
            loop: false,
            margin: 30,
            responsive: {
                700: {
                    items: 2
                },
                1500: {
                    items: 3
                }
            }
        });

        // --------------------------
        // Regular - Owl Carousel
        // --------------------------
        $('.slide-regular').owlCarousel({
            animateOut: 'fadeOut',
            dots: true,
            items: 2,
            loop: false,
            margin: 30,
            responsive: {
                600: {
                    items: 4
                }
            }
        });

        // --------------------------
        // No Margin - Owl Carousel
        // --------------------------
        $('.slide-nomargin').owlCarousel({
            animateOut: 'fadeOut',
            dots: true,
            items: 2,
            loop: false,
            margin: 0,
            responsive: {
                600: {
                    items: 4
                }
            }
        });

        // --------------------------
        // Single Pic - Owl Carousel
        // --------------------------
        $('.single-pic').owlCarousel({
            animateOut: 'fadeOut',
            dots: true,
            items: 1,
            loop: false
        });

        // --------------------------
        // Slide Half Centered - Owl Carousel
        // --------------------------
        $('.slide-half-centered').owlCarousel({
            center: true,
            animateOut: 'fadeOut',
            dots: true,
            items: 2,
            loop: false,
            margin: 30,
            responsive: {
                600: {
                    items: 2
                }
            }
        });

        // --------------------------
        // Slide Half - Owl Carousel
        // --------------------------
        $('.slide-half').owlCarousel({
            animateOut: 'fadeOut',
            dots: true,
            items: 2,
            loop: false,
            margin: 30
        });

        // --------------------------
        // Caption Scroll Modifier
        // --------------------------
        function captionScroll() {
            var caption = $('header').find('.caption'),
                arrow = $('.arrow'),
                wi = $(window),
                ww = wi.width(),
                wh = wi.height(),
                st = wi.scrollTop(),
                calc = $(window).scrollTop(),
                trans = calc / 2.33,
                arrowX = calc / 5.3,
                fade = (calc * 0.01),
                fade1 = fade / 6,
                fade2 = fade / 2;

                if (ww > 767 && wh > st) {
                    caption.css({
                        'transform': 'translateY(' + trans +
                            'px)',
                        'opacity': 1 - fade1
                    });
                    arrow.css({
                        'transform': 'translateY(' + arrowX +
                            'px)',
                        'opacity': 1 - fade2
                    });
                    return false;
                } else {
                    caption.css({
                        'transform': 'translateY(0)',
                        'opacity': 1
                    });
                    arrow.css({
                        'transform': 'translateY(0)',
                        'opacity': 1
                    });

                    return false;
                }
        }
        captionScroll();
        $(window).on('scroll', function() {
            captionScroll();
        });
        $(window).on('resize', function() {
            captionScroll();
        });

    // --------------------------
    // Slideshow
    // --------------------------
    if ($('#creative').length > 0) {
        var slideshow = new MLSlideshow(document.querySelector(
            '.slideshow'));
        document.querySelector('#next-slide').addEventListener(
            'click',
            function() { slideshow.next(); });
        document.querySelector('#prev-slide').addEventListener(
            'click',
            function() { slideshow.prev(); });
    }

    // --------------------------
    // .matchHeight() - Initialize Same Height Script : vendor/jquery.matchHeight-min.js
    // --------------------------
    $(".mh").matchHeight();

    // --------------------------
    // Start Project Modal
    // --------------------------
    var mbg = $('#modal-bg'),
        mbgee = $('#modal-bg #modal, .exit'),
        body = $('body'); $('a.start-project').on('click', function() {
        mbg.addClass('appear');
        body.addClass('modal-open');
        setTimeout(function() {
            mbgee.addClass('pop');
        }, 300);
        return false;
    }); $('#modal-bg .exit').on('click', function() {
        mbg.removeClass('appear');
        mbgee.removeClass('pop');
        body.removeClass('modal-open');
        return false;
    });

    // --------------------------
    // Search Modal
    // --------------------------
    var sm = $('#search-modal'),
        ee = $('#search-modal form, .exit'); $('nav a.search').on(
        'click',
        function() {
            sm.addClass('appear');
            body.addClass('modal-open');
            setTimeout(function() {
                ee.addClass('pop');
            }, 300);
            return false;
        }); $('#search-modal .exit').on('click', function() {
        sm.removeClass('appear');
        ee.removeClass('pop');
        body.removeClass('modal-open');
        return false;
    });

    // ----------------------------
    // Hamburger Menu
    // ----------------------------
    $('#menu-icon').on('click', function() {
        $('body').toggleClass('menu-open').toggleClass(
            'modal-open');
    });

    // ----------------------------
    // Skill Lines
    // ----------------------------
    sl.each(function() {
        $this = $(this);
        $this.find('span').css({
            'width': $(this).attr('data-percent')
        });
    });

    // ----------------------------
    // Back to Top
    // ----------------------------
    var su = $('.scrollup');

    function backtotop() {
        var wt = $(window).scrollTop();
        if (wt > 700) {
            su.addClass('vis');
        } else {
            su.removeClass('vis');
        }
    }
    backtotop(); $(window).on('scroll', function() {
        backtotop();
    }); su.on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 450);
        return false;
    });

    // ----------------------------
    // Tabs
    // ----------------------------
    $('.tabs').tabslet();

    // ----------------------------
    // Accordion
    // ----------------------------
    $('.accordion > li').on('click', function() {
        $this = $(this);
        var check = $this.hasClass('open');

        $this.addClass('open').children().slideDown()
            .parent().siblings().removeClass('open')
            .children().slideUp();

        if (check) {
            $this.removeClass('open').children().slideUp();
        }
        return false;
    });

    addEventListener(document, "scroll", function(e) {
            console.log(e.defaultPrevented); // will be false
            e.preventDefault(); // does nothing since the listener is passive
            console.log(e.defaultPrevented); // still false
        }, Modernizr.passiveeventlisteners ? { passive: true } :
        false);
    });
