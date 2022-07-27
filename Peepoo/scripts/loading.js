let loading_elem = document.querySelector('.loading-container');
$('body').fadeIn(300);
console.log("안녕");
document.addEventListener('DOMContentLoaded', function() {
  console.log("로딩 다된거같으니 지운다?");
  setInterval(() => {
    $('.loading-container').fadeOut(500);
    setTimeout(() => {
      loading_elem.remove();
    }, 500);
  }, 1000);
})