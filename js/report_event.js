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



select_box_controller[0].onclick = () => {
    dropbox_temp[0].style.display = 'block';
    select_box_controller[0].style.border = '2px solid #3182F6'
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
            function numberToKorean(number){
                var inputNumber  = number < 0 ? false : number;
                var unitWords    = ['', '만', '억', '조', '경'];
                var splitUnit    = 10000;
                var splitCount   = unitWords.length;
                var resultArray  = [];
                var resultString = '';
            
                for (let i = 0; i < splitCount; i++){
                    let unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
                    unitResult = Math.floor(unitResult);
                    if (unitResult > 0){
                        resultArray[i] = unitResult;
                    }
                }
            
                for (var i = 0; i < resultArray.length; i++){
                    if(!resultArray[i]) continue;
                    resultString = String(resultArray[i]) + unitWords[i] + resultString;
                }
            
                return resultString;
            }
            money_count.style.display = 'block';
  
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
    } else {
        rep_ip_chk[i].onblur = () => {
            if (rep_ip_chk[i].value.length == 0) {
                rep_ip_chk[i].style.border = '2px solid #EF5350';
                err_message[8].style.display = 'block';
            } else {
                rep_ip_chk[i].style.border = '1px solid #E6E9EC';
                err_message[8].style.display = 'none';
            }
        }
    }
}



select_box_controller[1].onclick = () => {
    dropbox_temp[1].style.display = 'block';
    select_box_controller[1].style.border = '2px solid #3182F6'
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


//세번째 박스

