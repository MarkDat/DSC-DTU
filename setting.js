 //ScrollDown introduce
function scrollToLocation(id){
            let target = $(id).attr("href");
            console.log("Top: "+$(target).offset().top);
            $('html,body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1000);
}   

