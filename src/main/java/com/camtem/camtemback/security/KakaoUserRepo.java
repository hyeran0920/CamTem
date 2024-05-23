package com.camtem.camtemback.security;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KakaoUserRepo extends JpaRepository<Member,Long> {
    Optional<Member> findByUserId(String userId);
}
