// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).on("click", "#pre", function (e) {
    var $input = $(this).parents().find('.blinking');
    var $preInput = $input.parent().parent().prev().children().find('input');
    $input.removeClass('blinking');
    $preInput.addClass('blinking');
})

$(document).on("click", "#nxt", function (e) {
    var $input = $(this).parents().find('.blinking');
    var $nxtInput = $input.parent().parent().next().children().find('input');
    $input.removeClass('blinking');
    $nxtInput.addClass('blinking');
})