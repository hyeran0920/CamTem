package com.camtem.camtemdb.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    PasswordEncoder passwordEncoder(){ //함수 생성
        return new BCryptPasswordEncoder(); //스프링이 가져가서 Bean(스프링이 뽑은 객체)으로 만들어줌
    }


}
