$(window).scroll(function () {
  let scrollValue = $(document).scrollTop();
  console.log(scrollValue);
  if (scrollValue >= 700 && scrollValue <= 2080) {
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
  } else if (scrollValue >= 12250 && scrollValue <= 15000) {
    setTimeout(function () {
      $("#finance").fadeIn(1000);
      $("#finance").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".tenth-wrapper ul").css("visibility", "visible");
      $(".tenth-wrapper ul").animate({ marginTop: "0" }, 500);
    }, 1500);
  } else if (scrollValue >= 15000 && scrollValue <= 20000) {
    setTimeout(function () {
      $("#devices").fadeIn(1000);
      $("#devices").animate({ marginTop: "0" }, 500);
      $("#business").fadeIn(1000);
      $("#business").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $("#buttons").fadeIn(1000);
      $("#buttons").animate({ marginTop: "0" }, 500);
    }, 2000);
  } else if (scrollValue >= 8760 && scrollValue <= 8860) {
    $(".first-cont img").css("opacity", "0.2");
  } else if (scrollValue >= 8960 && scrollValue <= 9060) {
    $(".first-cont img").css("opacity", "0.5");
  } else if (scrollValue >= 9060 && scrollValue <= 9160) {
    $(".first-cont img").css("opacity", "0.7");
  } else if (scrollValue >= 9160 && scrollValue <= 9260) {
    $(".first-cont img").css("opacity", "0.8");
  } else if (scrollValue >= 9260 && scrollValue <= 9560) {
    $(".first-cont img").css("opacity", "1");
  } else if (scrollValue >= 9700 && scrollValue <= 9800) {
    $(".first-txt").css("opacity", "0.2");
    $(".first-cont p").css("opacity", "0.2");
  } else if (scrollValue >= 9800 && scrollValue <= 9900) {
    $(".first-txt").css("opacity", "0.5");
    $(".first-cont p").css("opacity", "0.5");
  } else if (scrollValue >= 9900 && scrollValue <= 10000) {
    $(".first-txt").css("opacity", "0.8");
    $(".first-cont p").css("opacity", "0.8");
    $(".second-big img").css("opacity", "0.2");
  } else if (scrollValue >= 10000 && scrollValue <= 10100) {
    $(".first-txt").css("opacity", "1");
    $(".first-cont p").css("opacity", "1");
    $(".second-big img").css("opacity", "0.5");
    $(".second-small img").css("opacity", "0.2");
  } else if (scrollValue >= 10100 && scrollValue <= 10300) {
    $(".second-big img").css("opacity", "0.8");
    $(".second-small img").css("opacity", "0.5");
  } else if (scrollValue >= 10300 && scrollValue <= 10400) {
    $(".second-big img").css("opacity", "1");
    $(".second-small img").css("opacity", "0.8");
    $(".second-small p").css("opacity", "0.8");
  } else if (scrollValue >= 10400 && scrollValue <= 10600) {
    $(".second-small img").css("opacity", "1");
    $(".second-small p").css("opacity", "1");
  } else if (scrollValue >= 10600 && scrollValue <= 10700) {
    $(".second-big h3").css("opacity", "0.4");
  } else if (scrollValue >= 10700 && scrollValue <= 10800) {
    $(".second-big h3").css("opacity", "0.7");
  } else if (scrollValue >= 10800 && scrollValue <= 10900) {
    $(".second-big h3").css("opacity", "1");
  } else if (scrollValue >= 10900 && scrollValue <= 11100) {
    $(".third-cont img").css("opacity", "0.2");
  } else if (scrollValue >= 11100 && scrollValue <= 11200) {
    $(".third-cont img").css("opacity", "0.5");
  } else if (scrollValue >= 11200 && scrollValue <= 11300) {
    $(".third-cont img").css("opacity", "0.8");
  } else if (scrollValue >= 11300 && scrollValue <= 11400) {
    $(".third-cont img").css("opacity", "1");
  } else if (scrollValue >= 11600 && scrollValue <= 11700) {
    $(".third-cont .txt-title").css("opacity", "0.2");
  } else if (scrollValue >= 11700 && scrollValue <= 11800) {
    $(".third-cont .txt-title").css("opacity", "0.5");
  } else if (scrollValue >= 11800 && scrollValue <= 11900) {
    $(".third-cont .txt-title").css("opacity", "1");
  }
});

$(".content").delay(4000).fadeIn(1000);

$(".button button").on("click", function () {
  let offset = $(".second-wrapper").offset();
  console.log($("#devices"));
  $("html").animate({ scrollTop: offset.top }, 500);
});
