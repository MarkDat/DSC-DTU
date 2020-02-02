
    $(window).scroll(function () { 
            var pos_body =  $('html,body').scrollTop();
            console.log(pos_body);
            if(pos_body>=150){
                $("header").show();
            
            }else{
                $("header").hide();
            }
    });
