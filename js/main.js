$(window).resize(function() {
  const window_w = $(window).width();

  if(window_w > 1100) {
    if($(".mo-nav").hasClass("on")) {
      $(".gnb__btn-menu").removeClass("on");
      $(".mo-nav").removeClass("on");
      $(".gnb__bg").removeClass("on");
    }
  }
})

// mobile nav
$(function() {
  $(".gnb__btn-menu, .gnb__bg").on("click", function() {
    $(".gnb__btn-menu").toggleClass("on");
    $(".mo-nav").toggleClass("on");
    $(".gnb__bg").toggleClass("on");
  });
});