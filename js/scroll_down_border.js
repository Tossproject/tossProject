let beforePosition = document.documentElement.scrollTop;
document.addEventListener('scroll', function() {
    let afterPosition = document.documentElement.scrollTop;
    let header = document.querySelector('header')
    if (afterPosition > 50) {
        header.style.borderBottom = '1px solid #E5E8EB';
    } else {
        header.style.borderBottom = 'none';
    }
    beforePosition = afterPosition;
});