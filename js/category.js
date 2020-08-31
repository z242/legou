        // 楼层跳转
        
        /* $('.left p').click(function(){
            // alert(1);
            // $('.right').scroll(function(){
            
                let index=$(this).index();
                console.log(index);

                // console.log($('.right .floor').eq(2).offset().top);
        
                let stop=$('.right .floor').eq(index).offset().top;
                $('.right').animate({'scrollTop':stop-40});
            
        })
    }) */
    

$(function(){
    $('.left p').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})