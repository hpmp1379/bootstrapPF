$(function(){
    $('header').slideDown(1000);
    $('.logo a img').on('click',function(){
        $('#sectionScroll').animate({'margin-left': -100+'vw'});
    })
    $('.carousel-control-prev').on('click',function(){
        $('#sectionScroll').animate({'margin-left': 0});
    })
    $('.carousel-control-next').on('click',function(){
        $('#sectionScroll').animate({'margin-left': -200+'vw'});
    })
})