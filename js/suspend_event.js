
let beforePosition = document.documentElement.scrollTop;
document.addEventListener('scroll', function() {
    let afterPosition = document.documentElement.scrollTop;
    let hd_col_bor_change = document.querySelector('.hd_col_bor_change')
    if (afterPosition > 50) {
        hd_col_bor_change.style.borderBottom = '1px solid #E5E8EB';
    } else {
        hd_col_bor_change.style.borderBottom = 'none';
    }
    beforePosition = afterPosition;
});