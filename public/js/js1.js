function random(min, max){
    return (Math.random()*(max-min))+min;
}
// Random chu class: banner info
function wordsF(){
    var text  = $(".wordsFly");
    var split  = new SplitText(text);
    $(split.chars).each(function(i){
        TweenMax.from($(this),2,{
            opacity:0,
            x:random(-500,500),
            y:random(-500,500),
            z:random(-500,500)
        });
    }); 
}
var checked = $('#loadWeb').attr('aria-checked');
    console.log(checked);

$('html, body').css({
    overflow: 'hidden',
    height: '100%',
});
var inter = setInterval(function(){
window.scrollTo(0, 0);
        $('html, body').css({
    overflow: 'visible',
    height: 'auto'
    });
   $('#loadWeb').hide();
    $('.container').show();
    wordsF();
    
    clearInterval(inter);
},1500);

