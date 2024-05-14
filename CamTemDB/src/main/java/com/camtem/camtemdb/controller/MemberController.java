package com.camtem.camtemdb.controller;

import com.camtem.camtemdb.entity.Member;
import com.camtem.camtemdb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/RegisterPage")
public class MemberController {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @GetMapping("/register") //가입화면으로 이동
    String register(){
        return "register.html";
    }

    @PostMapping("/member") //가입버튼 누르면 가입정보를 저장 후 itemList으로 이동
    String addMember(String userId, String password, String displayName){
        Member member = new Member();
        member.setUserId(userId);
        member.setDisplayName(displayName);
        var hash = passwordEncoder.encode(password);
        member.setPassword(hash);

        memberRepository.save(member);
        return "redirect:/itemList";
    }

}
