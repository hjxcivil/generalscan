$(document).ready(function(){
    $(window).scroll( function() {               
        var top = $(document).scrollTop();     
        if(top > 100){                          
            var height = $(window).height();    
            $(".backTop").fadeIn(300).css({
                top: height-80
            });
        }
        if(top < 100){                            
            $(".backTop").fadeOut(200);
        }
    });
    
    $('.backTop').hover(function(){
    	$(this).animate({opacity:0.5},500)
    },function(){$(this).animate({opacity:1},500)})
    
    $('.backTop').click(function(){
        $('html, body').scrollTop(0);
    });
});