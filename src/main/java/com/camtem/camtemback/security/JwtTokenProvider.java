package com.camtem.camtemback.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;


import java.security.Key;
import java.util.Date;
import java.util.Map;

@Component
public class JwtTokenProvider {
//    @Value("${jwt.secret}")
    private final String secretKey;

//    @Value("${jwt.expiration}")
    private final long expirationTime;

    private Key key;

    private final UserDetailsService userDetailsService;

    public JwtTokenProvider(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
        this.secretKey = "abcd-123-bit-secret-key-camp-temp";//원하는키설정
        this.expirationTime=3600000;
    }

    @PostConstruct
    protected void init() {
        this.key = Keys.hmacShaKeyFor(secretKey.getBytes());
    }

    // JWT 생성
    public String createToken(Map<String, Object> userAttributes) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationTime);

        return Jwts.builder()
                .setClaims(userAttributes)
                .setSubject((String) userAttributes.get("id")) // Ensure this is set
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    // JWT에서 사용자 정보 추출
    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    // JWT 유효성 검사
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            System.out.println("여기는 jwt유효성검사실패");
            System.out.println(e);
            return false;
        }
    }

    // JWT로부터 인증 정보 생성
    public Authentication getAuthentication(String token) {
        String username = getUsernameFromToken(token);
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }
}
