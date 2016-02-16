$(document).ready(function(){

    var appearSpeed = 500

    // this function is what makes the 'more' things fade in and out when you click on their items
    $('.item').click(function() {
        var more = $(this).attr('class').split()
        var moreNum = parseInt(more, 10)
        var moreMate = $(".more" + "." + moreNum);
        moreMate.css("z-index", "2");
        moreMate.siblings().css('z-index','1');
        moreMate.fadeToggle(appearSpeed, function() {
            moreMate.siblings().fadeOut(appearSpeed);
        });
        $(this).toggleClass('highlight');
        $(this).siblings().removeClass('highlight');
    });




});