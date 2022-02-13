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
  } else if (scrollValue >= 2300 && scrollValue <= 4080) {
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
  } else if (scrollValue >= 4200 && scrollValue <= 5300) {
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
  } else if (scrollValue >= 5400 && scrollValue <= 7100) {
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
  } else if (scrollValue >= 7200 && scrollValue <= 8500) {
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
  } else if (scrollValue >= 13600 && scrollValue <= 15300) {
    setTimeout(function () {
      $("#finance").fadeIn(1000);
      $("#finance").animate({ marginTop: "0" }, 500);
    }, 500);
    setTimeout(function () {
      $(".tenth-wrapper ul").css("visibility", "visible");
      $(".tenth-wrapper ul").animate({ marginTop: "0" }, 500);
    }, 1500);
  } else if (scrollValue >= 15500 && scrollValue <= 20000) {
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
  } else if (scrollValue >= 9940 && scrollValue <= 10040) {
    $(".first-cont img").css("opacity", "0.2");
  } else if (scrollValue >= 10040 && scrollValue <= 10140) {
    $(".first-cont img").css("opacity", "0.4");
  } else if (scrollValue >= 10140 && scrollValue <= 10340) {
    $(".first-cont img").css("opacity", "0.6");
  } else if (scrollValue >= 10340 && scrollValue <= 10440) {
    $(".first-cont img").css("opacity", "0.8");
  } else if (scrollValue >= 10440 && scrollValue <= 10640) {
    $(".first-cont img").css("opacity", "1");
  } else if (scrollValue >= 10700 && scrollValue <= 10850) {
    $(".first-txt").css("opacity", "0.2");
    $(".first-cont p").css("opacity", "0.2");
  } else if (scrollValue >= 10850 && scrollValue <= 11000) {
    $(".first-txt").css("opacity", "0.5");
    $(".first-cont p").css("opacity", "0.5");
  } else if (scrollValue >= 11000 && scrollValue <= 11100) {
    $(".first-txt").css("opacity", "0.8");
    $(".first-cont p").css("opacity", "0.8");
    $(".second-big img").css("opacity", "0.2");
  } else if (scrollValue >= 11100 && scrollValue <= 11200) {
    $(".first-txt").css("opacity", "1");
    $(".first-cont p").css("opacity", "1");
    $(".second-big img").css("opacity", "0.4");
    $(".second-small img").css("opacity", "0.2");
  } else if (scrollValue >= 11200 && scrollValue <= 11300) {
    $(".second-big img").css("opacity", "0.6");
    $(".second-small img").css("opacity", "0.5");
  } else if (scrollValue >= 11300 && scrollValue <= 11500) {
    $(".second-big img").css("opacity", "0.8");
    $(".second-small img").css("opacity", "0.8");
  } else if (scrollValue >= 11500 && scrollValue <= 11600) {
    $(".second-small img").css("opacity", "1");
    $(".second-small p").css("opacity", "0.8");
  } else if (scrollValue >= 11600 && scrollValue <= 11700) {
    $(".second-big img").css("opacity", "1");
    $(".second-small p").css("opacity", "1");
  } else if (scrollValue >= 11700 && scrollValue <= 11800) {
    $(".second-big h3").css("opacity", "0.4");
  } else if (scrollValue >= 11800 && scrollValue <= 11900) {
    $(".second-big h3").css("opacity", "0.7");
  } else if (scrollValue >= 11900 && scrollValue <= 12000) {
    $(".second-big h3").css("opacity", "1");
    $(".third-cont img").css("opacity", "0.2");
  } else if (scrollValue >= 12000 && scrollValue <= 12200) {
    $(".third-cont img").css("opacity", "0.5");
  } else if (scrollValue >= 12200 && scrollValue <= 12400) {
    $(".third-cont img").css("opacity", "0.8");
  } else if (scrollValue >= 12400 && scrollValue <= 12700) {
    $(".third-cont img").css("opacity", "1");
  } else if (scrollValue >= 12700 && scrollValue <= 12750) {
    $(".third-cont .txt-title").css("opacity", "0.2");
  } else if (scrollValue >= 12750 && scrollValue <= 12850) {
    $(".third-cont .txt-title").css("opacity", "0.5");
  } else if (scrollValue >= 12850 && scrollValue <= 12950) {
    $(".third-cont .txt-title").css("opacity", "1");
  } /* 투자 7섹션 스크롤 */ else if (
    scrollValue >= 8083 &&
    scrollValue <= 8123
  ) {
    $("img.first-appear").css("opacity", "0.3");
  } else if (scrollValue >= 8123 && scrollValue <= 8163) {
    $("img.first-appear").css("opacity", "0.7");
  } else if (scrollValue >= 8163 && scrollValue <= 8203) {
    $("img.first-appear").css("opacity", "1");
    $("img.second-appear").css("opacity", "0.3");
  } else if (scrollValue >= 8203 && scrollValue <= 8243) {
    $("img.second-appear").css("opacity", "0.7");
  } else if (scrollValue >= 8163 && scrollValue <= 8203) {
    $("img.second-appear").css("opacity", "1");
    $("img.third-appear").css("opacity", "0.3");
  } else if (scrollValue >= 8203 && scrollValue <= 8243) {
    $("img.third-appear").css("opacity", "0.7");
  } else if (scrollValue >= 8243 && scrollValue <= 8283) {
    $("img.third-appear").css("opacity", "1");
  } /* 8섹션 스크롤 */ else if (scrollValue >= 8740 && scrollValue <= 8840) {
    $(".eigth-wrapper").css("width", "1040");
  }
});

$(".content").delay(4000).fadeIn(1000);

$(".button button").on("click", function () {
  let offset = $(".second-wrapper").offset();
  $("html").animate({ scrollTop: offset.top }, 500);
});
