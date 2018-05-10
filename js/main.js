document.addEventListener('DOMContentLoaded', function () {
    // variables
    var main_page = $('.main-page');
    var time_line = $('.time-line');

    $('.get-second-screen').click(function (e) {
        e.preventDefault();

        main_page.addClass('move');
        time_line.addClass('move');

    });

    $('.get-first-screen').click(function (e) {
        e.preventDefault();

        main_page.removeClass('move');
        time_line.removeClass('move');

    })

});