
    showAll($('html,body').scrollTop());
//ScrollDown introduce
function scrollToLocation(id){
        let target = $(id).attr("href");
        console.log("Top: "+$(target).offset().top);
        $('html,body').stop().animate({
        scrollTop: $(target).offset().top
        }, 1000);
}  

  $(window).scroll(function () { 
            var pos_body =  $('html,body').scrollTop();
            console.log(pos_body);
            if(pos_body>=150){
                $("header").show();
            }else{
                $("header").hide();
            }
            
            showAll(pos_body);
    });
  
    
    var posShowJoin =850;
    var posShowTarget =1100;
    var posShowActii = 1562;
    var posShowContent = 1950;
    function showAllPos(a,b,c,d){
        posShowJoin = a; 
        posShowTarget = b;
        posShowActii = c;
        posShowContent = d;
    }
    function showSvgIntro(pb){
        if(pb>=253){
            $(".display-svg-intro").show();
        }
    }
    function showSvgJoin(pb){
        if(pb>=posShowJoin){
            $(".display-svg-join").show();  
            $(".joinWords").addClass('moveWords');
        }
    }
    
    function showSvgTarget(pb){
        if(pb>=posShowTarget){
            $(".display-svg-target").addClass("display-svg-target-appear");  
            $(".wordsTarget").addClass('moveWordsTarget');
        }
    }

    function showActi(pb){
        if(pb>=posShowActii){
            $(".actiHide").addClass('boxScale');   
        }
    }

    function showContact(pb){
        if(pb>=posShowContent){
            $(".ctContact").addClass('showContactt'); 
            $(".showContactt").show();   
        }
    }

    function showAll(pos_body){
             showSvgIntro(pos_body);
            showSvgJoin(pos_body);
            showSvgTarget(pos_body);
            showActi(pos_body);
            showContact(pos_body);
    }
//Responsive screen
    var check=true;
    function checkResize(){

        console.log("CHeck resize: "+$(window).width())
        
         if ($(window).width() <= 600) {
            console.log("Thu nho");
            if(check===true){   
                console.log("Thu nho");
                // showJoin =500;
                // showTarget =600;
                // showActii = 858;
                showAllPos(500,600,858,1500);
                    check=false;
                    $(".reduceWidth").css('height', '-=280');
                    //alert('dã tru')  
                } 
            }else if($(window).width() <= 1000){
                if(check===true){   
                    showAllPos(0,0,0,0);
                    showAll(0);
                }
            }     
            else{  
                if(check===false){
                        console.log("TO");
                        showAllPos(850,1100,1562,1950);
                        // showJoin =850;
                        // showTarget =1100;
                        // showActii = 1562;
                        check=true;
                        $(".reduceWidth").css('height', '+=280');
        }        
        }
    }
 
    $(window).resize(function(){
        checkResize();
    });

 checkResize();


