$(function(){
    $('header').slideDown(1000);
    setTimeout(function(){
        $('.mainTitle h2 span').css({'margin-top':0});
    },500)
    setTimeout(function(){
        $('.mainTitle p span').css({'margin-top':0});
    },1000)
    $('.logo a img').on('click',function(){
        $('#sectionScroll').animate({'margin-left': -100+'vw'}, 500);
    })
    $('.carousel-control-prev').on('click',function(){
        $('#sectionScroll').animate({'margin-left': 0}, 500);
    })
    $('.carousel-control-next').on('click',function(){
        $('#sectionScroll').animate({'margin-left': -200+'vw'}, 500);
    })
})