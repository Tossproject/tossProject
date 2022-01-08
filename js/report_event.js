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

//세번째 박스 input
let select_box_controller = document.querySelectorAll('.select_box_controller');
let dropbox_temp = document.querySelectorAll('.dropbox_temp');
let s_d = document.querySelectorAll('.s_d');
let s_d_ip = document.querySelector('.s_d_ip');
let s_b = document.querySelectorAll('.s_b');
let s_b_ip = document.querySelector('.s_b_ip');

let ubn_ip = document.querySelector('.ubn_ip');
let utd_ip = document.querySelector('.utd_ip');
let rep_ip_chk = document.querySelectorAll('.rep_ip_chk');
let money_count = document.querySelector('.money_count');
//세번째 박스 input

//세번째 박스 체크박스
let check_on1 = document.querySelector('.check_on1');
let check_off1 = document.querySelector('.check_off1');
let check_on2 = document.querySelector('.check_on2');
let check_off2 = document.querySelector('.check_off2');

let last_button =document.querySelector('.last_button');
//세번째 박스 체크박스

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
for (let i = 0; i < sb_ip.length; i++){
    sb_ip[i].onclick = () => {
        sb_ip[i].style.border = '2px solid #3182F6';
    }
    sb_ip[i].onfocus = () => {
        sb_ip[i].style.border = '2px solid #3182F6';
    }
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
    if (err_message[0].style.display == 'block') {
        alert('이름을 확인해주세요');
    } else if (err_message[1].style.display == 'block') {
        alert('생년월일을 확인해주세요');
    } else if (err_message[2].style.display == 'block') {
        alert('휴대전화를 확인해주세요');
    } else if ((sb_ip[0].value.length === 0) || (sb_ip[1].value.length === 0) || (sb_ip[2].value.length === 0)) { 
        alert('입력란을 채워주세요');
    }else {
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
}
//두번째 박스

//세번째 박스


select_box_controller[0].onclick = () => {
    dropbox_temp[0].style.display = 'block';
    select_box_controller[0].style.border = '2px solid #3182F6';
    err_message[3].style.display = 'none';
    select_box_controller[0].onblur = () => {
        setTimeout(function() {
            dropbox_temp[0].style.display = 'none';
          }, 500);
    }
}

for (let i = 0; i < s_d.length; i++){
    s_d[i].onclick = () => {
        utd_ip.value = s_d[i].innerHTML;
        s_d_ip.innerHTML = s_d[i].innerHTML;
        select_box_controller[0].style.border = '1px solid #E6E9EC';
        s_d_ip.style.opacity = '1';
        dropbox_temp[0].style.display = 'none';
    }
}


for (let i = 0; i < rep_ip_chk.length; i++){


    rep_ip_chk[i].onclick = () => {
        rep_ip_chk[i].style.border = '2px solid #3182F6';

    }
    rep_ip_chk[i].onfocus = () => {
        rep_ip_chk[i].style.border = '2px solid #3182F6';

    }

    if (i == 0) {
        rep_ip_chk[i].onblur = () => {
            if (rep_ip_chk[i].value.length == 0) {
                rep_ip_chk[i].style.border = '2px solid #EF5350';
                err_message[4].style.display = 'block';
            } else {
                rep_ip_chk[i].style.border = '1px solid #E6E9EC';
                err_message[4].style.display = 'none';
            }
        }
        rep_ip_chk[i].onkeyup = () => {
            function numberFormat(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                //3단위 콤마 정규식
            }
            
            function numberToKorean(number){
                var inputNumber  = number < 0 ? false : number; 
                var unitWords    = ['', '만', '억', '조', '경'];//단위 배열
                var splitUnit    = 10000;//단위
                var splitCount   = unitWords.length;//5
                var resultArray  = [];
                var resultString = '';
            
                for (var i = 0; i < splitCount; i++){
                    var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
                    //Math.pow는 제곱 메서드 unitResult = (입력값 % 10000의 i제곱) / 10000의 i제곱
                    unitResult = Math.floor(unitResult); //Math.floor는 소수점 제거 메서드
                    //만약 입력값이 19140이면 결과 var unitResult  = 10000
                    if (unitResult > 0){
                        resultArray[i] = unitResult;
                        //리스트 추가
                    }
                }
            
                for (var i = 0; i < resultArray.length; i++){
                    if(!resultArray[i]) continue;
                    resultString = String(numberFormat(resultArray[i])) + unitWords[i] + resultString;
                }
            
                return resultString;
            }
            //출처 : https://this-programmer.tistory.com/136
            if (rep_ip_chk[i].value.length > 0) {
                money_count.style.display = 'block';
            }
  
            money_count.innerHTML = numberToKorean(rep_ip_chk[i].value) + "원"; 
        }
    } else if (i == 1) {
        rep_ip_chk[i].onblur = () => {
            if (rep_ip_chk[i].value.length < 8) {
                rep_ip_chk[i].style.border = '2px solid #EF5350';
                err_message[5].style.display = 'block';
            } else {
                rep_ip_chk[i].style.border = '1px solid #E6E9EC';
                err_message[5].style.display = 'none';
            }
        }
    } else if (i == 2) {
        rep_ip_chk[i].onblur = () => {
            if (rep_ip_chk[i].value.length == 0) {
                rep_ip_chk[i].style.border = '2px solid #EF5350';
                err_message[6].style.display = 'block';
            } else {
                rep_ip_chk[i].style.border = '1px solid #E6E9EC';
                err_message[6].style.display = 'none';
            }
        }
    } else if(i == 3){
        rep_ip_chk[i].onblur = () => {
            if (rep_ip_chk[i].value.length < 5) {
                rep_ip_chk[i].style.border = '2px solid #EF5350';
                err_message[8].style.display = 'block';
            } else {
                rep_ip_chk[i].style.border = '1px solid #E6E9EC';
                err_message[8].style.display = 'none';
            }
        }
    } else {
        rep_ip_chk[i].onblur = () => {
            if (rep_ip_chk[i].value.length < 10) {
                rep_ip_chk[i].style.border = '2px solid #EF5350';
                err_message[9].style.display = 'block';
            } else {
                rep_ip_chk[i].style.border = '1px solid #E6E9EC';
                err_message[9].style.display = 'none';
            }
        }
    }
}

select_box_controller[1].onclick = () => {
    dropbox_temp[1].style.display = 'block';
    select_box_controller[1].style.border = '2px solid #3182F6';
    err_message[7].style.display = 'none';
    select_box_controller[1].onblur = () => {
        setTimeout(function() {
            dropbox_temp[1].style.display = 'none';
          }, 500);
    }
}



for (let i = 0; i < s_b.length; i++){
    s_b[i].onclick = () => {
        ubn_ip.value = s_b[i].innerHTML;
        s_b_ip.innerHTML = s_b[i].innerHTML;
        select_box_controller[1].style.border = '1px solid #E6E9EC';
        s_b_ip.style.opacity = '1';
        dropbox_temp[1].style.display = 'none';
    }
}


check_on1.onclick = () => {
    check_off1.style.display = 'block';
    err_message[10].style.display = 'block';
    check_on1.style.display = 'none';
}

check_off1.onclick = () => {
    check_on1.style.display = 'block';
    err_message[10].style.display = 'none';
    check_off1.style.display = 'none';
}

check_on2.onclick = () => {
    check_off2.style.display = 'block';
    check_on2.style.display = 'none';
    err_message[11].style.display = 'block';
}

check_off2.onclick = () => {
    err_message[11].style.display = 'none';
    check_on2.style.display = 'block';
    check_off2.style.display = 'none';
}

last_button.onclick = () => {
    if (utd_ip.value == '') {
        err_message[3].style.display = 'block';
        select_box_controller[0].style.border = '2px solid #EF5350';
        select_box_controller[0].focus();
    } else if (ubn_ip.value == '') {
        err_message[7].style.display = 'block';
        select_box_controller[1].style.border = '2px solid #EF5350';
        select_box_controller[1].focus();
    } else if ((rep_ip_chk[0].value.length === 0) || (rep_ip_chk[1].value.length === 0) || (rep_ip_chk[2].value.length === 0) || (rep_ip_chk[3].value.length === 0) || (rep_ip_chk[4].value.length === 0)) { 
        alert('입력란을 채워주세요');
    } else if ((check_on1.style.display = 'none') || (check_on2.style.display = 'none')) {
        err_message[10].style.display = 'block';
        err_message[11].style.display = 'block';
    } else {
        // last_button.setAttribute('type', 'submit'); 백이 있으면 구현
        window.location.href = './report.html';
        //fe프로젝트라 일부로 현재페이지로 가게끔 구성
    }
}

//세번째 박스

//제목누르면 해당 박스 나오기

hd_text_wrapper[0].onclick = () => {
    hd_text_wrapper[0].style.opacity = 1;
    display_content.style.display = 'block';
    dp_num[0].innerHTML = '1';

    info_hidden_content.style.display = 'none';
    hd_text_wrapper[1].style.opacity = 1;
    hd_text_wrapper[1].style.display = 'none';
    line_bar_dp_none[0].style.display = 'none';
    dp_num[1].innerHTML = '2';

    report_hidden_content.style.display = 'none';
    hd_text_wrapper[1].style.opacity = 1;
    hd_text_wrapper[2].style.display = 'none';
    line_bar_dp_none[1].style.display = 'none';
    dp_num[2].innerHTML = '3';
}

hd_text_wrapper[1].onclick = () => {
    hd_text_wrapper[0].style.opacity = 0.7;
    display_content.style.display = 'none';
    dp_num[0].innerHTML = '<i class="fas fa-check"></i>';

    info_hidden_content.style.display = 'block';
    hd_text_wrapper[1].style.opacity = 1;
    hd_text_wrapper[1].style.display = 'flex';
    line_bar_dp_none[0].style.display = 'block';
    dp_num[1].innerHTML = '2';

    report_hidden_content.style.display = 'none';
    hd_text_wrapper[1].style.opacity = 1;
    hd_text_wrapper[2].style.display = 'none';
    line_bar_dp_none[1].style.display = 'none';
    dp_num[2].innerHTML = '3';
}


//제목누르면 해당 박스 나오기


