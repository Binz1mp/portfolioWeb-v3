// ---------- 메뉴슬라이드 추가 ----------
$('.toggle, .gnb-dummy, .gnb a').click(function() {
    $('.toggle, .overlay, .gnb').toggleClass('active');
  })
  // --------------------
  // ---------- 모바일 임시 메뉴 추가 ----------
  $('.navbar-mobile').click(function() {
    $('.menus').slideToggle();
  })
  // --------------------
  // ---------- 클릭해서 유튜브 헬퍼 크롬 웹스토어 페이지로 이동 시작 ----------
  const youtubehelper = document.getElementById("youtubehelper");
  function movetoyoutubehelper () {
      window.open("https://chrome.google.com/webstore/detail/youtube-helper/pnllijckhhmdphamnkihmigimjegedle")
  }
  youtubehelper.addEventListener("click", movetoyoutubehelper);
  // --------------------
  // ---------- 클릭해서 유튜브 헬퍼 깃허브 레포 페이지로 이동 시작 ----------
  const githublogo = document.getElementById("githublogo");
  function movetoyoutubehelper_github () {
      window.open("https://github.com/Binz1mp/Youtube-Helper")
  }
  githublogo.addEventListener("click", movetoyoutubehelper_github);
  // --------------------
  // ---------- 이메일 클립보드 카피 시작 ----------
  const clicktocopyElem = document.querySelector(".my-email");
  function copyToClipboard (val) {
      const emailtext = document.createElement("textarea");
      document.body.appendChild(emailtext);
      emailtext.value = val;
      emailtext.select();
      document.execCommand('copy');
      document.body.removeChild(emailtext);
      alert(`binieon@naver.com 이메일을 클립보드에 복사했습니다.`);
  }
  function copyEmail () {
      copyToClipboard('binieon@naver.com');
  }
  clicktocopyElem.addEventListener("click", copyEmail)
  // --------------------