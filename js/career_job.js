/* nav */
$(".trigger").on("click", function () {
  if ($(".icon2").css("display") == "none") {
    $(".icon2")
      .css("display", "block")
      .css("backgroundSize", "100% 21px")
      .css("transform", "translate(-50%, -50%) rotate(45deg)");
    $(".icon")
      .css("backgroundSize", "100% 21px")
      .css("transform", "translate(15%, 71%) rotate(-45deg)");
    $(".toss_nav ul").slideDown(300, "swing");
  } else if ($(".icon2").css("display") == "block") {
    $(".icon2").css("display", "none");
    $(".icon").css("backgroundSize", "100% 8px").css("transform", "none");
    $(".toss_nav ul").slideUp(300, "swing");
  }
});
/* nav */

$("#select").on("change", function () {
  // 사용자가 옵션을 바꿧는지 테스트
  // console.log("옵션이 바뀌었습니다.");
  if ($("#select").val() == "Communication") {
    $(".servise").show();
    $(".data").hide();
    $(".design").hide();
    $(".special").hide();
    $(".core").hide();
    $(".business").hide();
  } else if ($("#select").val() == "CoreSystem") {
    $(".servise").hide();
    $(".data").hide();
    $(".design").hide();
    $(".special").hide();
    $(".core").show();
    $(".business").hide();
  } else if ($("#select").val() == "Business") {
    $(".servise").hide();
    $(".data").hide();
    $(".design").hide();
    $(".special").hide();
    $(".core").hide();
    $(".business").show();
  } else if ($("#select").val() == "Data") {
    $(".servise").hide();
    $(".data").hide();
    $(".design").hide();
    $(".special").show();
    $(".core").hide();
    $(".business").hide();
  } else if ($("#select").val() == "Design") {
    $(".servise").hide();
    $(".data").hide();
    $(".design").show();
    $(".special").hide();
    $(".core").hide();
    $(".business").hide();
  } else if ($("#select").val() == "Allselect") {
    $(".servise").show();
    $(".data").show();
    $(".design").show();
    $(".special").show();
    $(".core").show();
    $(".business").show();
  }
});

/* select */

// 클래스 이름이 div2를 호출하였고 이 호출한 값을 div2에 저장하였음
var div2 = document.getElementsByClassName("div2");

// handleClick(이름은 사용자가 지정) 이라는 함수에
// event라는 매게변수가 들어가있음
function handleClick(event) {
  console.log(event.target);

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }
}

// init이라는 함수를 동작을 할건데
function init() {
  // 반복문 for을 이용하여 div2의 클래스의 갯수를 정해주었고
  for (var i = 0; i < div2.length; i++) {
    // div2[0]번째의 이벤트를 등록을 할건데
    // 클릭을했을때 위에있는 handleClick 이벤트가 발생을 할것임
    div2[i].addEventListener("click", handleClick);
  }
}
init();

$(".list li.div2 a").on("click", function () {
  $(".list li.list-active").removeClass("list-active");

  let $li = $(this).parent();
  $li.addClass("list-active");

  let currentID = $li.attr("id");
  if (currentID == "all-tab") {
    $(".goal-text").css("display", "none");
    $("#all-contents").css("display", "block");
    $(".text-box").css("display", "none");
    $("#all-box").css("display", "block");
  } else if (currentID == "toss-tab") {
    $(".goal-text").css("display", "none");
    $("#toss-contents").css("display", "block");
    $(".text-box").css("display", "none");
    $("#toss-box").css("display", "block");
  } else if (currentID == "bank-tab") {
    $(".goal-text").css("display", "none");
    $("#bank-contents").css("display", "block");
    $(".text-box").css("display", "none");
    $("#bank-box").css("display", "block");
  } else if (currentID == "pay-tab") {
    $(".goal-text").css("display", "none");
    $("#pay-contents").css("display", "block");
    $(".text-box").css("display", "none");
    $("#pay-box").css("display", "block");
  } else if (currentID == "stock-tab") {
    $(".goal-text").css("display", "none");
    $("#stock-contents").css("display", "block");
    $(".text-box").css("display", "none");
    $("#stock-box").css("display", "block");
  } else if (currentID == "insure-tab") {
    $(".goal-text").css("display", "none");
    $("#insure-contents").css("display", "block");
    $(".text-box").css("display", "none");
    $("#insure-box").css("display", "block");
  } else if (currentID == "cx-tab") {
    $(".goal-text").css("display", "none");
    $("#cx-contents").css("display", "block");
    $(".text-box").css("display", "none");
    $("#cx-box").css("display", "block");
  } else {
    $(".goal-text").css("display", "none");
    $("#data-contents").css("display", "block");
    $(".text-box").css("display", "none");
    $("#data-box").css("display", "block");
  }
});
