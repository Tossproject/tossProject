// 출생년도 함수
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength);
    }    
  }   
// 출생년도 함수



//큰 박스
let display_content = document.querySelector('.display_content');
let info_hidden_content = document.querySelector('.info_hidden_content');
let report_hidden_content = document.querySelector('.report_hidden_content');
//큰 박스

//원 안의 숫자,체크아이콘
let line_bar_dp_none = document.querySelectorAll('.line_bar_dp_none');
let hd_text_wrapper = document.querySelectorAll('.hd_text_wrapper');
let dp_num = document.querySelectorAll('.dp_num');
//원 안의 숫자,체크아이콘

//버튼
let next_btn = document.querySelector('.next_btn'); //첫번째 다음 버튼
info_next_btn = document.querySelector('.info_next_btn');//두번째 다음 버튼
// 버튼

//두번째 박스 input
let sb_ip = document.querySelectorAll('.sb_ip');
let err_message = document.querySelectorAll('.err_message');
//두번째 박스 input


//다음 버튼 누를 경우 다음 div 오기 처음 박스
next_btn.onclick = () => {
    display_content.style.display = 'none';
    info_hidden_content.style.display = 'block';
    dp_num[0].innerHTML = '<i class="fas fa-check"></i>';
    hd_text_wrapper[0].style.opacity = '0.7';
    line_bar_dp_none[0].style.display = 'block';
    hd_text_wrapper[1].style.display = 'flex';
}
//다음 버튼 누를 경우 다음 div 오기 처음 박스

//두번째 박스
function bd_color(v) {
    sb_ip[v].style.border = '2px solid #3182F6';
}



sb_ip[0].onclick = () => {
    bd_color(0);
}

sb_ip[1].onclick = () => {
    bd_color(1);
}

sb_ip[2].onclick = () => {
    bd_color(2);
}
sb_ip[0].onfocus = () => {
    bd_color(0);
}

sb_ip[1].onfocus = () => {
    bd_color(1);
}

sb_ip[2].onfocus = () => {
    bd_color(2);
}

sb_ip[0].onblur = () => {
    if (sb_ip[0].value.length == 0) {
        err_message[0].style.display = 'block';
        sb_ip[0].style.border = '2px solid #EF5350';
    }else {
        err_message[0].style.display = 'none';
        sb_ip[0].style.border = '1px solid #E6E9EC';
    }
}

sb_ip[1].onblur = () => {
    if (sb_ip[1].value.length < 8) {
        err_message[1].style.display = 'block';
        sb_ip[1].style.border = '2px solid #EF5350';
    }else {
        err_message[1].style.display = 'none';
        sb_ip[1].style.border = '1px solid #E6E9EC';
    }
}

sb_ip[2].onblur = () => {
    if (sb_ip[2].value.length < 11) {
        err_message[2].style.display = 'block';
        sb_ip[2].style.border = '2px solid #EF5350';
    }else {
        err_message[2].style.display = 'none';
        sb_ip[2].style.border = '1px solid #E6E9EC';
    }
}


info_next_btn.onclick = () => {
    display_content.style.display = 'none';
    info_hidden_content.style.display = 'none';
    report_hidden_content.style.display = 'block';
    dp_num[0].innerHTML = '<i class="fas fa-check"></i>';
    dp_num[1].innerHTML = '<i class="fas fa-check"></i>';
    hd_text_wrapper[0].style.opacity = '0.7';
    hd_text_wrapper[1].style.opacity = '0.7';
    line_bar_dp_none[0].style.display = 'block';
    line_bar_dp_none[1].style.display = 'block';
    hd_text_wrapper[1].style.display = 'flex';
    hd_text_wrapper[2].style.display = 'flex';
}
//두번째 박스


