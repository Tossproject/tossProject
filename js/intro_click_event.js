let click_button = document.querySelectorAll('.click_button');
let filterBlur = document.querySelectorAll('.filterBlur');
let contents_change = document.querySelectorAll('.contents_change');
let c_img  = document.querySelectorAll('.c_img');
let dp_click = document.querySelectorAll('.dp_click');


let yearTab = document.querySelectorAll('.year-tab li');
let annualContents = document.querySelector('.annual-contents');
let dot_style = document.querySelectorAll('.dot_style');


for (let i = 0; i < click_button.length; i++){
    click_button[i].onclick = () => {
        contents_change[i].classList.add('click_contents');
        filterBlur[i].style.display = 'block';
        dp_click[i].style.display = 'block';
        click_button[i].style.display = 'none';
    }
}

for (let i = 0; i < c_img.length; i++) {
    c_img[i].onclick = () => {
        contents_change[i].classList.remove('click_contents');
        filterBlur[i].style.display = 'none';
        dp_click[i].style.display = 'none';
        click_button[i].style.display = 'block';

    }
}


for (let i = 0; i < yearTab.length; i++){

    yearTab[i].onclick = () => {
        for (let j = 0; j < i; j++){
            yearTab[j].classList.remove('year-active');
            dot_style[j].style.outline = 'none'
        }
        for (let x = 8; x > i; x--){
            yearTab[x].classList.remove('year-active');
            dot_style[x].style.outline = 'none'

        }
        yearTab[i].classList.add('year-active');
        dot_style[i].style.outline = '6px solid white';

        annualContents.style.marginTop = '30px';
        annualContents.style.opacity = '1';
    }
}

for (let i = 0; i < dot_style.length; i++){

    dot_style[i].onclick = () => {
        for (let j = 0; j < i; j++){
            yearTab[j].classList.remove('year-active');
            dot_style[j].style.outline = 'none'
        }
        for (let x = 8; x > i; x--){
            yearTab[x].classList.remove('year-active');
            dot_style[x].style.outline = 'none'

        }
        yearTab[i].classList.add('year-active');
        dot_style[i].style.outline = '6px solid white';

        annualContents.style.marginTop = '30px';
        annualContents.style.opacity = '1';
    }
}