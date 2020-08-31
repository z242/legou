$(function(){
    // 轮播图
    new Swiper ('.slider', {
        loop: true, // 循环模式选项
        
        autoplay: {//自动播放
            delay: 3000,
            disableOnInteraction: false,
          },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }})

    new Swiper ('.play_nav', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination'
        }})

    new Swiper ('.news_title', {
        direction:'vertical',
        loop: true, // 循环模式选项
        
        autoplay: {//自动播放
            delay: 3000,
            disableOnInteraction: false
          } 
        })


    
})