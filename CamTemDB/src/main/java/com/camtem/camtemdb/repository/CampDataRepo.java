package com.camtem.camtemdb.repository;


import com.camtem.camtemdb.entity.Camping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampDataRepo extends JpaRepository<Camping,Integer> {
}
