var downButton = document.querySelector('#downbutton');
var middleBody = document.querySelector('#middlebody');

$(document).ready(function() {
    $("#downbutton").click(function() {
        $('html, body').animate({
            scrollTop: $("#middlebody").offset().top
        }, 1500);
    });
});
  