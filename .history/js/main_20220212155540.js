$(window).scroll(function () {
  let scrollValue = $(document).scrollTop();
  console.log(scrollValue);
});

$(".content").delay(4000).fadeIn(1000);

$(".button button").on("click", function () {
  let offset = $(".second-wrapper").offset();
  $("html").animate({ scrollTop: offset.top }, 500);
});

// rgba(0,27,55,.1)
