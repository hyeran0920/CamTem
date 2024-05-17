package com.camtem.camtemdb.repository;

import com.camtem.camtemdb.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
