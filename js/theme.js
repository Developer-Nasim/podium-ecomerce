;(function($) {
    "use strict";    
    

    function productSection() {
        if ($('.product')) {
            $('.product').owlCarousel ({
                loop: true,
                margin: 30,
                navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
                nav: false,
                dots: true,
                items: 8,
                center: false,
                responsive: {
                    0:{
                        items:2
                    },
                    400:{
                        items:2
                    },
                    500:{
                        items:3
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:5
                    },
                    1000:{
                        items:6
                    },
                    1199:{
                        items:8
                    }
                }
            });
        }
    }
    function brandSection() {
        if ($('.brand')) {
            $('.brand').owlCarousel ({
                loop: true,
                margin: 30,
                navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
                nav: false,
                dots: false,
                items: 6,
                center: false,
                responsive: {
                    0:{
                        items:2
                    },
                    500:{
                        items:3
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:5
                    },
                    1000:{
                        items:5
                    },
                    1199:{
                        items:6
                    }
                }
            });
        }
    }
    function bannerSection() {
        if ($('.banner')) {
            $('.banner').owlCarousel ({
                loop: true,
                margin: 30,
                navText: ['<i class="fa-solid fa-chevron-left"></i>'],
                nav: false,
                dots: false,
                items: 1,
                center: false,
                responsive: {
                    1199:{
                        items:1
                    }
                }
            });
        }
    }
    function collectionSection() {
        if ($('.collection')) {
            $('.collection').owlCarousel ({
                loop: true,
                margin: 15,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                navText: false,
                nav: false,
                dots: false,
                items: 7,
                center: false,
                responsive: {
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:4
                    },
                    1000:{
                        items:5
                    },
                    1199:{
                        items:6
                    },
                    1399:{
                        items:7
                    }
                }
            });
        }
    }
    // sidebar_menu All Page/
    $("#menu-opener").on('click', function () {
        $(".sidebar-menu").toggleClass("active");
    });
    $(".remove-one").on('click', function () {
        $(".sidebar-menu").removeClass("active");
    });
    
    // sidebar_project/
    $("#sidebar-openr").on('click', function () {
        $(".project-sidber-section, body, .sidebar-overlay").toggleClass("active");
    });
    $(".sidebar-overlay").on('click', function () {
        $(".project-sidber-section, body, .sidebar-overlay").removeClass("active");
    });

    productSection();
    brandSection();
    bannerSection();
    collectionSection();

})(jQuery); 
