$(function(){
    // 获焦
    $('[data_aa="search"]').focus(function(){
        // alert(1);
        location.href='./search.html';
    })


    // 返回上一页
    $('#return').click(function(){
        // alert(1);
        history.go(-1);
    })

    // 底部切换

    function fn(){
        let path=location.pathname;
        console.log(path);
            $(`.footer a[href='.${path}']`).addClass('active').closest().siblings().find('a').removeClass('active');
    }
    
    fn()

})