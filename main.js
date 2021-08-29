$(document).ready(function () {
    $('.menu_burger').click(function () {
        $('.menu_burger,.menu__text').toggleClass('active');
        $('body').toggleClass('lock');
    });
});