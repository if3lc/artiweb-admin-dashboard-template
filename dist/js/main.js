$(function() {
    $('.toggle-menu').click(function(e) {
        e.preventDefault();

        $('.nav .sub-menu').slideUp();
        $(this).parent().find('.sub-menu').stop().slideToggle();
    });

    //Toggle default menu.
    $('#default .sub-menu').show();
});