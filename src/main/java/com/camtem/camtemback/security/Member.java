package com.camtem.camtemback.security;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true) //여기에 카카오에서 보내준 id저장, 3343434이런숫자임
    private String userId;

//    @Column(nullable = true)
//    private String password;

    @Column(nullable = false) //일단 닉네임만 필수, 카카오에서 닉넴보내줌
    private String nickname;

    @Enumerated(EnumType.STRING)
    private Authority authority;


    @Builder
    public Member(Long id, String userId,  String nickname, Authority authority) {
        this.id = id;
        this.userId = userId;
        this.nickname = nickname;
        this.authority = authority;
    }
}
