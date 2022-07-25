// document.addEventListener('DOMContentLoaded', function() {
$(function() {
///// 스크롤다운시 다운로드 버튼이 헤더 우측에 나타남 /////
  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      $('.download').addClass('active');
    } else {
      $('.download').removeClass('active');
    }
  })
  
///// 사이트맵 어코디언 - 타이틀 클릭하면 하단에 링크 보임 /////
  $('.sitemap-title').click(function() {
    $(this).next().slideToggle();
    $(this).parent().siblings().children('.sitemap-contents').slideUp();
///// 사이트맵 어코디언 - 타이틀 클릭하면 화살표 회전함 /////
    $(this).toggleClass('active');
    $(this).parent().siblings().children('.sitemap-title').removeClass('active');
  })
})
window.onresize = function () {
  if (window.outerWidth > 1024) {
    if ($('.sitemap-contents').css('display') == 'none') {
      $('.sitemap-contents').css('display', 'block');
    }
  } else if (window.outerWidth < 1024) {
    if ($('.sitemap-contents').css('display') == 'block') {
      $('.sitemap-contents').css('display', 'none');
    }
  }
}
// })

