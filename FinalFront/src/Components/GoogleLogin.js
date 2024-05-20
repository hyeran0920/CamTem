function GoogleLogin() {
    // 구글 인증 팝업을 열고 사용자를 구글 로그인 페이지로 리다이렉션합니다.
    const GoogleLoginUrl = "";
    window.open(GoogleLoginUrl, "_blank", "width=500,height=400");
  }

export default GoogleLogin;