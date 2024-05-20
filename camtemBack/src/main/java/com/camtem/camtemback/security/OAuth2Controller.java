package com.camtem.camtemback.security;



import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OAuth2Controller {
    @Value("${kakao.client-id}")
    private  String clientId;

    @Value("${kakao.client-secret}")
    private  String clientSecret;

    @Value("${kakao.redirect-uri}")
    private String redirectUri;

    @Value("${kakao.authorization-grant-type}")
    private String grantType;

    @Value("${kakao.token-uri}")
    private String accessTokenUrl;

    private final OAuthService oAuthService;

    @GetMapping("/api/oauth/kakao")
    public ResponseEntity<?> kakaoLogin(@RequestParam String code){
        System.out.println("code=" + code); //프론트에서 받아온 인가코드

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(accessTokenUrl)
                .queryParam("grant_type", grantType)
                .queryParam("client_id", clientId)
                .queryParam("redirect_uri", redirectUri)
                .queryParam("code", code)
                .queryParam("client_secret", clientSecret);

        String accessToken = oAuthService.getAccessToken(builder.toUriString());

        System.out.println("엑세스토큰="+accessToken);

        Map<String,Object> userInfo = oAuthService.getKakaoUserInfo(accessToken);

        //받아온 유저정보를 서비스로 넘겨서 가입이 되어있는지 아닌지 처리
        Map<String,Object> kakaoLoginResponse = oAuthService.handleKakaoLoginResponse(userInfo);

//        System.out.println("만들어진 jwt 토큰"+jwt);
        System.out.println(kakaoLoginResponse.get("token"));

        return ResponseEntity.ok(kakaoLoginResponse);
    }

}
