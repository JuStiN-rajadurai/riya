// Portfolio tabs
$(function () {
  "use strict";
  var filterList = {
    init: function () {
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.designs, .development, .seo, .marketing'
        }
      });
    }
  };
  // Run the show!
  filterList.init();
});

// Portfolio tabs
$(function () {
  "use strict";
  var filterList = {
    init: function () {
      $('#portfoliolist1').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.yoga, .fitness, .gym, .running'
        }
      });
    }
  };
  // Run the show!
  filterList.init();
});

$(function () {
  "use strict";
  var filterList = {
    init: function () {
      $('#portfoliolist2').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.breakfast, .lunch, .dinner, .snack'
        }
      });
    }
  };
  // Run the show!
  filterList.init();
});

$(function () {
  "use strict";
  var filterList = {
    init: function () {
      $('#portfoliolist3').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.cardiology, .dental, .surgeries, .patology'
        }
      });
    }
  };
  // Run the show!
  filterList.init();
});

// header Fixed class
const currentPage = window.location.pathname.split("/").pop();
if (currentPage === "index.html" || currentPage === "") {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 2) {
      $(".main_header").addClass("dark_bg");
    } else {
      $(".main_header").removeClass("dark_bg");
    }
  });
} else {
  $(".main_header").addClass("dark_bg");
}


// header Menu Scroll down js
$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop();
  $('.main_menu_list li a').on("each", function () {
    var currentElement = $(this);
    var currentTop = $($(this).attr('href')).offset().top - 80;
    var currentHeight = $(currentElement.attr("href")).outerHeight();
    if (currentTop <= scrollPos && (currentTop + currentHeight) > scrollPos) {
      $(currentElement).parent().siblings().find('a').removeClass('active');
      $(currentElement).addClass('active');
    }
    else {
      $(currentElement).removeClass('active');
    }
  });
});
$('.main_menu_list li a').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top - 77,
    },
    500,
    'linear'
  )
});


// Scroll up js
$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 50) {
    $('.scrollUp').fadeIn(200);
  } else {
    $('.scrollUp').fadeOut(200);
  }
});
$('.scrollUp').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 800);
});

$(document).ready(function () {
  // scroll Down js
  $('.scroll_down').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $('#about').offset().top - 77, }, 'slow')
  });

  $(".sliding_link").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });


  // portfolio popup js
  $('#portfoliolist .portfolio_item,#portfoliolist1 .portfolio_item,.galleryList .gallery_item').magnificPopup({
    delegate: 'a',
    gallery: {
      enabled: true
    },
    type: 'image'
  });

  // portfolio popup js
  $('.get_quote').magnificPopup({
  });


  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true
  });




  // mobile menu toggle
  $(".menu-bar").on('click', function () {
    $(this).addClass('active');
    $('.main_menu').addClass('opened');
  });
  $(".close_menu").on('click', function () {
    $('.menu-bar').removeClass('active');
    $('.main_menu').removeClass('opened');
  });
});


// Counter js
jQuery(window).scroll(startCounter);
function startCounter() {
  "use strict";
  var hT = jQuery('.love_counter').offset().top,
    hH = jQuery('.love_counter').outerHeight(),
    wH = jQuery(window).height();
  if (jQuery(window).scrollTop() > hT + hH - wH) {
    jQuery(window).off("scroll", startCounter);
    jQuery('.love_count').each(function () {
      var $this = jQuery(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
  }
}


// Main Slider Slide animation
function mainSlider() {
  "use strict";
  var BasicSlider = $('.banner_slider');
  BasicSlider.on('init', function (e, slick) {
    var $firstAnimatingElements = $('.b_slide').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });
  BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('.b_slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
}
mainSlider();

if ($(".b_slide").hasClass(".slick-active")) {
  alert("sfsd");
  $(this).find(".wow").removeClass('wow');
}



// Loader Js
$(window).on("load", function () {
  $(".loader").fadeOut("slow");
});


// go down
$(".go_down_arrow i.fa,.sliding_link").on('click', function () {
  $('html, body').animate({
    scrollTop: $("#main_body").offset().top
  }, 800);
});


// banner slider js
$('.banner_slider').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  // fade:true,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
      }
    }
  ]
})


// porfloio slider  js
$('.porfloio_slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  // fade:true,
  slidesToShow: 1,
  arrows: true,
  autoplay: true,
  slidesToScroll: 1
})


// Teams slider js
$('.team_list').slick({
  dots: false,
  infinite: true,
  speed: 500,
  // fade:true,
  slidesToShow: 4,
  arrows: true,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

// related items slider js
$('.related_items_slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  arrows: false,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})


// testimonials slider  js
$('.testi_slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

// Partners slider  js
$('.partners_slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  arrows: false,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

// Wow animation call
new WOW().init();


let html_contents = `
<style>
.menu-item.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
}
    .dropdown-item.active, .dropdown-item:active{
        background-color: #838dc7 !important;
        }
</style>  
     <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-2 col-sm-3 col-xs-6 col-5">
                    <div class="logo">
                        <a href="#">
                            <img class="img-responsive light_logo" src="assets/images/template-three/logo-white.png"
                                alt="logo">
                            <img class="img-responsive dark_logo" src="assets/images/template-three/logo.png"
                                alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-lg-10 col-sm-9 col-xs-6 col-7">
                    <div class="main_nav ml-auto">

                        <!-- Main Nav Menu -->
                        <nav id="primary_navigation" class="site_navigation">

                            <div class="main_menu">
                                <a href="javascript:void(0);" class="close_menu"><i class="fa fa-times"></i></a>
                                <ul class="nav main_menu_list justify-content-end">
                                    <li class="menu-item page-active">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="about.html">About</a>
                                    </li>
                                     
                                      <li class="menu-item dropdown">
                                          <a class="dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                              Products
                                          </a>
                                          <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                                              <li><a class="dropdown-item" href="#product1">Cow</a></li>
                                              <li><a class="dropdown-item" href="#product2">Goat</a></li>
                                              <li><a class="dropdown-item" href="#product3">Sheep</a></li>
                                              <li><a class="dropdown-item" href="#product4">Suede</a></li>
                                              <li><a class="dropdown-item" href="#product4">Foils</a></li>
                                          </ul>
                                      </li>


                                    <li class="menu-item"><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <a href="#joiningPopup" class="get_quote btn orange_gradient open-popup-link">Enquiry</a>
                            <a class="menu-bar mobile-navigation" href="javascript:void(0)">
                                <span class="menu-btn-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </a>
                        </nav>
                        <!-- End Main Nav Menu -->
                    </div>
                </div>
            </div>
        </div>
`;
$("header").append(html_contents);


let footer_contents = `
 <div class="container">
            <div class="footer_top  text-center">
                <div class="footer_top_logo">
                    <a href="#" class="footer-logo"><img src="assets/images/template-three/logo-icon.png"
                            alt="logo icon"></a>
                </div>
                <p>
                    We deliver innovative, ethically sourced leather solutions for global fashion, footwear, and premium garment industries.
                    <br>
                    We supply high-quality leather solutions to fashion, footwear, and luxury garment brands worldwide.
                </p>
            </div>
            <div class="row ">
                <div class="col-sm-4 ">
                    <h3 class="text-left text-light">About Riya Enterprises</h3>
                    <p class="text-left text-light">
                        
                        Riya Enterprises is an LWG Gold–certified manufacturer of premium, sustainably produced leather. Since 2018 we’ve combined skilled craftsmanship and modern technology to deliver customized leather solutions for fashion, footwear and luxury garments worldwide.
                    </p>
                    <!-- social icons -->
                <div class="social_div">
                    <ul class="social_list">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    </ul>
                </div><!-- /. social icons -->
                </div>
               
                <div class="col-sm-3">
                    <div class="footer_sec">
                        
                        <h3>Useful Links</h3>
                        
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="footer_sec">
                       
                        <h3>Google Map </h3>
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9699904557235!2d80.1477718!3d12.975690649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e2de54acf05%3A0x7321724177dd0a78!2sC.Pallavaram%2C%20Mallika%20Nagar%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!5e0!3m2!1sen!2sin!4v1764911854309!5m2!1sen!2sin"  style="border:0;width: 100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div class="copyrigt_text d-flex justify-content-between">
                <span>© Copyright 2025 Riya.</span>
               
            </div>
        </div>
        <div class="svg_curve">
            <!-- <?xml version="1.0" encoding="utf-8"?> -->
            <svg version="1.1" x="0px" y="0px" width="3293px" height="190.76px" viewBox="0 0 3293 190.76"
                enable-background="new 0 0 3293 190.76" xml:space="preserve">
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF"
                    d="M0,2.954V190.76h3293V0.868C3293,0.868,1760.584,400.175,0,2.954z" />
            </svg>
        </div>`;
$("footer").append(footer_contents);