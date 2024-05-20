function NaverLogin() {
    // 네이버 인증 팝업을 열고 사용자를 네이버 로그인 페이지로 리다이렉션합니다.
    const naverLoginUrl = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&state=YOUR_STATE";
    window.open(naverLoginUrl, "_blank", "width=500,height=400");
  }

export default NaverLogin;