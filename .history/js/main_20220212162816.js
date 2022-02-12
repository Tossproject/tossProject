$(window).scroll(function () {
  let scrollValue = $(document).scrollTop();
  console.log(scrollValue);
  if (scrollValue >= 800 && scrollValue <= 2060) {
    setTimeout(function () {
      $("#home-spend").fadeIn(1000);
      $("#home-spend").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".img1").fadeIn(1000);
      $(".img1").animate({ marginTop: "0" }, 500);
    }, 1000);
    setTimeout(function () {
      $(".img2").fadeIn(1000);
      $(".img2").animate({ marginTop: "0" }, 500);
    }, 1500);
    setTimeout(function () {
      $("#account").fadeIn(1000);
    }, 2000);
  } else if (scrollValue >= 2200 && scrollValue <= 3700) {
    setTimeout(function () {
      $("#transfer").fadeIn(1000);
      $("#transfer").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".video-wrapper").css("visibility", "visible");
      $(".video-wrapper").animate({ marginTop: "0" }, 500);
    }, 1000);
    setTimeout(function () {
      $(".check").fadeIn(1000);
      $(".check").animate({ marginTop: "0" }, 500);
    }, 1500);
    setTimeout(function () {
      $("#account").fadeIn(1000);
    }, 2000);
  }
});

$(".content").delay(4000).fadeIn(1000);

$(".button button").on("click", function () {
  let offset = $(".second-wrapper").offset();
  $("html").animate({ scrollTop: offset.top }, 500);
});

// rgba(0,27,55,.1)
