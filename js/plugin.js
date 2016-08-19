/**
 * Created by mahmoud wageeh on 18-Feb-16.
 */
$(document).ready(function() {
    "use strict";
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1200);
    // start loading screen
    $(window).load(function(){
        $("#loader-wrapper #loader").fadeOut(1000,function(){
            $("body").css("overflow","auto");
            $(this).parent().fadeOut(2000,function(){
                $(this).remove();
            });

        });

    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 228) {
            $('.navBar-top').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 229) {
            $('.navBar-top').removeClass('navbar-fixed-top');
        }

    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 2600) {
            $('.navBar-bottom').hide();
        }
        if ($(window).scrollTop() < 2600) {
            $('.navBar-bottom').show();
        }

    });
});
// scroll up
var scrollButton=$("#scroll");

$(window).scroll(function(){
    if($(this).scrollTop()>=700)
    {
        scrollButton.show();
    }
    else
    {
        scrollButton.hide();
    }
});
scrollButton.click(function(){
    $("html,body").animate({scrollTop:0},600);
});





