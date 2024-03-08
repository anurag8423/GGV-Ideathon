window.addEventListener('scroll', function () {
    const el = document.getElementById("navid");
    if (window.pageYOffset > 0) {
        el.classList.add('naclass');
    }
    else {
        el.classList.remove('naclass');
    }
})