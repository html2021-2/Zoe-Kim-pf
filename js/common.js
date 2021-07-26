$(document).ready(function () {
  // 네비게이션 클릭시 이동
  $('.pc_nav ul li a').on('click', function (e) {
    e.preventDefault(); // a 태그의 기본 기능 제한!!!
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 400, 'swing');
  });

  // #topBtn 버튼을 클릭시 상단으로 이동
  $('#topBtn').on('click', function () {
    $('html, body').stop().animate({scrollTop: 0}); // html -> ie, body -> 크롬
  });
  
  // 스크롤 이벤트
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var $header = $("header");
    //console.log(scrollTop, $('.flow').offset().top);

    // #topBtn
    if (scrollTop < 20) {
      gsap.to('#topBtn', {display: 'none', opacity: 0, duration: 0.5});
    } else {
      if (scrollTop === $(document).height() - $(window).height()) gsap.to('#topBtn', {display: 'block', opacity: 1, bottom: 60, duration: 0.5})
      else gsap.to('#topBtn', {display: 'block', opacity: 1, bottom: 30, duration: 0.5})
    }

    // fadeIn(), fadeOut()에 stop이 이상하다....
    // if (scrollTop < 20) {
    //   $('#topBtn').fadeOut();
    // } else {
    //   $('#topBtn').fadeIn();
    //   if (scrollTop === $(document).height() - $(window).height()) $('#topBtn').stop().animate({bottom: 60}, 300);
    //   else $('#topBtn').stop().animate({bottom: 30}, 300);
    // }

    // 헤더 상단 고정 & 풀기
    if(scrollY < $(window).height()){
      $header.removeClass("fixed");
      $header.find(">div").attr("class","shadow1");
      var $top = $(window).height()-$header.outerHeight();
      var $header_p = $top+($header.outerHeight()*(scrollTop/$(window).height()));
      $header.css({"top": $header_p});
    }else{
      $header.addClass("fixed");
      $header.find(">div").attr("class","shadow2");
    }





  });
  
  $(window).trigger('scroll');

});