$('body').fadeIn(300);
document.addEventListener('DOMContentLoaded', function() {

  let loading_process = setInterval(() => {
    $('.loading-container').fadeOut(300);
    setTimeout(() => {
      $('.loading-container').remove();
    }, 300);
  }, 1000);
  
  setTimeout(() => {
    clearInterval(loading_process);
  }, 1000);
})