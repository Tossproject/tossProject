$(window).scroll(function () {
  let scrollValue = $(document).scrollTop();
  console.log(scrollValue);
  if (scrollValue >= 800 && scrollValue <= 2060) {
    $("#home-spend").fadeIn(1000);
    // $("#home-spend").animate({ marginTop: "0" }, 300);
    // setTimeout(function () {

    // }, 300);
  }
});

$(".content").delay(4000).fadeIn(1000);

$(".button button").on("click", function () {
  let offset = $(".second-wrapper").offset();
  $("html").animate({ scrollTop: offset.top }, 500);
});

// rgba(0,27,55,.1)
