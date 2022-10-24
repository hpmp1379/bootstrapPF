$(function(){
    $('.carousel-control-prev').on('click',function(){
        document.getElementById('prev-text').innerHTML = '이전';
    })
    $('.carousel-control-next').on('click',function(){
        document.getElementById('next-text').innerHTML = '다음';
    })
})