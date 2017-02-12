window.onload=function(){
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', //垂直
    loop: true, //无缝循环
    onSlideChangeEnd: function(swiper){ //切换到某一屏后的回调函数

      var index=swiper.activeIndex;
      //当前添加类名 其他删除
      $('.swiper-slide').removeClass('current').eq(index).addClass('current');

    }

  })

$(".music").on("click",function(){
    $(this).toggleClass("play");
  var audio=$('audio').get(0);
  console.log(audio);
  //音频控制
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
})



}

