$(".content")
  .delay(4000)
  .fadeIn(function () {
    $(".content").css("display", "flex");
  }, 1000);

$(".button button").on("click", function () {
  let offset = $(".second-wrapper").offset();
  $("html").animate({ scrollTop: offset.top }, 500);
});
$(window).scroll(function () {
  let scrollValue = $(document).scrollTop();
  console.log(scrollValue);
});
// $(".second-wrapper p").on("click", function () {
//   console.log($(".content"));
// });
