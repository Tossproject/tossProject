$(".content").delay(4000).fadeIn(1000);

$(".button button").on("click", function () {
  $(document).animate({ scrollTop: $(this.hash).offset().top }, 500);
});
$(window).scroll(function () {
  let scrollValue = $(document).scrollTop();
  console.log(scrollValue);
});
// $(".second-wrapper p").on("click", function () {
//   console.log($(".content"));
// });
