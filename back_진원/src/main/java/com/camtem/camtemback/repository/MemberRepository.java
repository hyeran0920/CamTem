package com.camtem.camtemback.repository;

import com.camtem.camtemback.dto.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
