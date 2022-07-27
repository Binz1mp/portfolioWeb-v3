$('body').fadeIn(300);
document.addEventListener('DOMContentLoaded', function() {
  let loading_process = setInterval(() => {
    $('.loading-container').fadeOut(300);
    setTimeout(() => {
      $('.loading-container').remove();
    }, 300);
  }, 1000);
  // 1초 기다린다.
  // fadeout 300ms 쓴다를 선언함과 동시에 fadeout 발동
  // fadeout 300ms 쓴다를 선언함과 동시에 300ms 기다린다.
  // 300ms 다쓰면 remove한다.
  // 위 과정을 반복한다.


  setTimeout(() => {
    clearInterval(loading_process);
  }, 1000);
  // 위 interval 시작함과 동시에 1초 기다린다.
  // 반복하는 과정을 없애고 멈춘다.

})


// - setInterval
// 실행중 다른 setInterval로 인해 함수가 호출되면
// 기존에 실행되던 함수는 종료된다.
// - setTimeout
// 실행중 다른 setTimeout로 인해 함수가 호출돼도
// 기존에 실행된 함수에 영향을 주지 않는다.