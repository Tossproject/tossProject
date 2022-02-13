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
      $(".check").css("visibility", "visible");
      $(".check").animate({ marginTop: "0" }, 500);
    }, 1500);
  } else if (scrollValue >= 4100 && scrollValue <= 5200) {
    setTimeout(function () {
      $("#lend .head").fadeIn(1000);
      $("#lend .head").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".img-wrapper").fadeIn(1000);
      $(".img-wrapper").animate({ marginTop: "0" }, 500);
    }, 1000);
    setTimeout(function () {
      $("#limit").fadeIn(1000);
      $("#limit").animate({ marginTop: "0" }, 500);
    }, 1500);
    setTimeout(function () {
      $("#first-appear").fadeIn(1000);
      $("#first-appear").animate({ marginTop: "0" }, 500);
    }, 2000);
    setTimeout(function () {
      $("#second-appear").fadeIn(1000);
      $("#second-appear").animate({ marginTop: "0" }, 500);
    }, 2500);
    setTimeout(function () {
      $("#third-appear").fadeIn(1000);
      $("#third-appear").animate({ marginTop: "0" }, 500);
    }, 3000);
  } else if (scrollValue >= 5000 && scrollValue <= 6700) {
    setTimeout(function () {
      $("#credit-title").fadeIn(1000);
      $("#credit-title").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".credit").fadeIn(1000);
      $(".credit").animate({ marginTop: "0" }, 500);
    }, 1000);
    setTimeout(function () {
      $(".credit-score").css("visibility", "visible");
      $(".credit-score").animate({ marginTop: "0" }, 500);
    }, 1500);
  } else if (scrollValue >= 6900 && scrollValue <= 8200) {
    setTimeout(function () {
      $("#invest").fadeIn(1000);
      $("#invest").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".left-txt").fadeIn(1000);
      $(".left-txt").animate({ marginTop: "-150" }, 500);
    }, 1000);
    setTimeout(function () {
      $(".right-txt").fadeIn(1000);
      $(".right-txt").animate({ marginTop: "-150" }, 500);
    }, 1500);
    setTimeout(function () {
      $("#third-visible").fadeIn(1000);
      $("#third-visible").animate({ marginTop: "0" }, 500);
    }, 2000);
  } else if (scrollValue >= 12250 && scrollValue <= 20000) {
    setTimeout(function () {
      $("#finance").fadeIn(1000);
      $("#finance").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".tenth-wrapper ul").css("visibility", "visible");
      $(".tenth-wrapper ul").animate({ marginTop: "0" }, 500);
    }, 1000);
  } else if (scrollValue >= 12250 && scrollValue <= 14000) {
    setTimeout(function () {
      $("#finance").fadeIn(1000);
      $("#finance").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".tenth-wrapper ul").css("visibility", "visible");
      $(".tenth-wrapper ul").animate({ marginTop: "0" }, 500);
    }, 1000);
  }
});

$(".content").delay(4000).fadeIn(1000);

$(".button button").on("click", function () {
  let offset = $(".second-wrapper").offset();
  $("html").animate({ scrollTop: offset.top }, 500);
});

// rgba(0,27,55,.1)
