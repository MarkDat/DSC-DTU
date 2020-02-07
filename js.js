
    $(window).scroll(function () { 
            var pos_body =  $('html,body').scrollTop();
            console.log(pos_body);
            if(pos_body>=150){
                $("header").show();
            }else{
                $("header").hide();
            }
            
            showSvgIntro(pos_body);
            showSvgJoin(pos_body)
    });

    function showSvgIntro(pb){
        if(pb>=253){
            $(".display-svg-intro").show();
        }
    }

    function showSvgJoin(pb){
        if(pb>=817){
            $(".display-svg-join").show();
        }
    }

//     $(window).resize(function(){

//         if ($(window).width() <= 1178) {  
//             // $("#svgIntro").hide(); 
//         }     
//  });