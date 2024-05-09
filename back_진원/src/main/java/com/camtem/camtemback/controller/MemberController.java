package com.camtem.camtemback.controller;

import com.camtem.camtemback.dto.Member;
import com.camtem.camtemback.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberRepository memberRepository;

    @GetMapping("/RegisterPage") //가입화면으로 이동
    String register(){
        return "/RegisterPage";
    }

    @PostMapping("/member") //가입버튼 누르면 가입정보를 저장 후 itemList으로 이동
    String addMember(String username, String password, String displayName){
        Member member = new Member();
        member.setUsername(username);
        member.setDisplayName(displayName);
        member.setPassword(password);
        memberRepository.save(member);
        return "redirect:/LoginPage";
    }

    @GetMapping("/LoginPage") //로그인화면으로 이동
    public String login(){
        return "/productlist";
    }


}
