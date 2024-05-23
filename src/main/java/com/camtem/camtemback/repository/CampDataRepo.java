package com.camtem.camtemback.repository;


import com.camtem.camtemback.entity.Camping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CampDataRepo extends JpaRepository<Camping,Integer> {
    List<Camping> findAllByDoNmContains(String doNm);
}
