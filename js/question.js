
let beforePosition = document.documentElement.scrollTop;
document.addEventListener('scroll', function() {
    let afterPosition = document.documentElement.scrollTop;
    let hd_col_bor_change = document.querySelector('.hd_col_bor_change')
    if (afterPosition > 50) {
        hd_col_bor_change.style.borderBottom = '1px solid #E5E8EB';
        hd_col_bor_change.style.backgroundColor = '#ffffff';
    } else {
        hd_col_bor_change.style.borderBottom = 'none';
        hd_col_bor_change.style.backgroundColor = '#fff';
    }
    beforePosition = afterPosition;
});