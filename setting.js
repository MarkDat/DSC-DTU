 //ScrollDown introduce
function scrollToLocation(id){
            let target = $(id).attr("href");
            $('html,body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1000);
}     