package com.camtem.camtemback.repository;


import com.camtem.camtemback.entity.Camping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CampDataRepo extends JpaRepository<Camping,Integer> {
    //doNm으로 포함된거 다 찾기
    List<Camping> findAllByDoNmContains(String doNm);
    //findallbyaddr1contains(String addr1);
}
