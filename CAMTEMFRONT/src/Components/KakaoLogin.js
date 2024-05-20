function KakaoLogin() {
    // 카카오 인증 팝업을 열고 사용자를 카카오 로그인 페이지로 리다이렉션합니다.
    const KakaoLoginUrl = "https://kauth.kakao.com/oauth/authorize";
    window.open(KakaoLoginUrl, "_blank", "width=500,height=400");
  }

export default KakaoLogin;