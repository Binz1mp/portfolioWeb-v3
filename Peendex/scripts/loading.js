$('body').fadeIn(300);
document.addEventListener('DOMContentLoaded', function() {
  let loading_process = setInterval(() => {
    $('.loading-container').fadeOut(300);
    console.log('1');
    setTimeout(() => {
      $('.loading-container').remove();
      console.log('2');
    }, 300);
    // clearInterval(loading_process);
    // 이래도 된다. 하지만 interval과 timeout의 차이를 공부하기 위해 주석처리한다.
    console.log('4');
  }, 1000);
  // 1초 기다린다.
  // fadeout 300ms 쓴다를 선언함과 거의 동시에 fadeout 발동 (정확히 동시는 아니지만 아무튼)
  // fadeout 300ms 쓴다를 선언함과 거의 동시에 300ms 기다린다.
  // 300ms 다쓰면 remove한다.
  // 위 과정을 반복한다.


  setTimeout(() => {
    clearInterval(loading_process);
    console.log('3');
  }, 1000);
  // 위 interval 시작함과 거의 동시에 1초 기다린다.
  // 반복하는 과정을 없애고 멈춘다.


  // 로그를 찍어보면 알지만, 1 3 2 순으로 찍힌다.
  // 그럼 clearinterval로 인터벌이 멈춰야되지만, 이미 큐에 있어서 2도 실행된다.
  // https://www.notion.so/10-setTimeout-setInterval-b71a02545c8f44e6afcb6b685d675cd3
  // https://velog.io/@qhsh866/JS-setTimeout-%EC%9D%98-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98-%EC%8B%A4%ED%96%89-%EC%8B%9C%EC%A0%90
  // https://velog.io/@yunsungyang-omc/JS-%ED%95%A8%EC%88%98%EC%9D%98-%EC%A6%89%EC%8B%9C-%EC%A2%85%EB%A3%8C
  // 참조하자.
  

  // 요약:
  // interval 스캔, 1초 기다리는동안 그다음 타임아웃 스캔, 그거도 1초 기다리기
  // 1초 지났으면 인터벌에서 콜스택에서 콘솔1 실행 및 타임아웃 스캔 및 기다리는동안 다음라인 콘솔4 실행
  // 거의 동시에 1초 같이 지났으니 타임아웃에서 콘솔3 실행
  // 300ms 지났으면 콘솔2 실행

  // 추가로, interval을 즉시 멈추고싶다면 isStopped같은 변수 플래그를 만들어서 넣어주자.

})


// - setInterval
// 실행중 다른 setInterval로 인해 함수가 호출되면
// 기존에 실행되던 함수는 종료된다.
// - setTimeout
// 실행중 다른 setTimeout로 인해 함수가 호출돼도
// 기존에 실행된 함수에 영향을 주지 않는다.