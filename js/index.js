window.onload=function(){
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', //��ֱ
    loop: true, //�޷�ѭ��
    onSlideChangeEnd: function(swiper){ //�л���ĳһ����Ļص�����

      var index=swiper.activeIndex;
      //��ǰ������� ����ɾ��
      $('.swiper-slide').removeClass('current').eq(index).addClass('current');

    }

  })

$(".music").on("click",function(){
    $(this).toggleClass("play");
  var audio=$('audio').get(0);
  console.log(audio);
  //��Ƶ����
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
})



}

