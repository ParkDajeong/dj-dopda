$(function() {
  // header scroll event
  const headerHeight = $(".header").outerHeight();
  const delta = 5;
  let isScroll = false;
  let lastScrollTop = 0;

  function hasScrolled() {
    const current = $(window).scrollTop();
    
    if($(window).width() < 1100) return;
    if(Math.abs(lastScrollTop - current) <= delta) return;

    if(current > lastScrollTop && current > headerHeight) {
      $(".header").addClass("off");
      $(".header").removeClass("on");
    } else if (current === 0) {
      $(".header").removeClass("off on");
    } else {
      $(".header").addClass("on");
    }

    lastScrollTop = current;
  }

  $(window).scroll(function(e) {
    isScroll = true;
  });

  setInterval(function() {
    if(isScroll) {
      hasScrolled();
      isScroll = false;
    }
  }, 200);

  // mobile nav
  $(window).resize(function() {
    const window_w = $(window).width();
  
    if(window_w > 1100) {
      if($(".mo-nav").hasClass("on")) {
        $(".gnb__btn-menu").removeClass("on");
        $(".mo-nav").removeClass("on");
        $(".gnb__bg").removeClass("on");
      }
    } else {
      $(".header").removeClass("off on");
    }
  })

  $(function() {
    $(".gnb__btn-menu, .gnb__bg").on("click", function() {
      $(".gnb__btn-menu").toggleClass("on");
      $(".mo-nav").toggleClass("on");
      $(".gnb__bg").toggleClass("on");
    });
  });
  
  // visual slide
  $(function() {
    $(".visual .slide").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
      fade: true,
      pauseOnHover: false,
      pauseOnFocus: false,
    });
  });
  
  // visual slide page
  $(".visual .slide").on("beforeChange", function(_event, _slick, _current, next) {
    $(".slide-page__item").removeClass("on");
    $(".slide-page__item").eq(next).addClass("on");
  });
});