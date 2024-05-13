package com.camtem.camtemdb.service;

import com.camtem.camtemdb.api.CampingAPI;

import com.camtem.camtemdb.dto.CampDTO;
import com.camtem.camtemdb.dto.CampingResponse;
import com.camtem.camtemdb.entity.Camping;
import com.camtem.camtemdb.repository.CampDataRepo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CampService {
    private final CampingAPI campingAPI;
    private final ObjectMapper objectMapper;
    private final CampDataRepo campDataRepo;


    //api를 호출해서 받아온 응답을 CampList클래스의 리스트로 바꾸는 메소드
    public List<CampDTO> fetchCampingData(int pageNo){
        ResponseEntity<String> response = campingAPI.getCampData(pageNo);
//        System.out.println(response);
        try {
            CampingResponse campingResponse = objectMapper.readValue(response.getBody(), CampingResponse.class);
            return campingResponse.getResponse().getBody().getItems().getItem();
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    //entity를 데이터베이스에 저장하는 메소드
    public void fetchAndSaveCampingData(int pageNo) {
        List<CampDTO> dtos = fetchCampingData(pageNo);
        List<Camping> entities = dtos.stream()
                .map(this::dtoToEntity)
                .collect(Collectors.toList());

        campDataRepo.saveAll(entities);
    }

    //모든 데이터 받아와서 반복문으로 저장하기
    public void fetchAndSaveAllCampingData() {
        int totalDataCount = 3826; // 총 데이터 개수
        int pageSize = 100; // 페이지당 데이터 개수
        int totalPages = (int) Math.ceil((double) totalDataCount / pageSize);//3826/100한걸 올림해서 39

        for (int pageNo = 1; pageNo <= totalPages; pageNo++) {
            fetchAndSaveCampingData(pageNo);
        }
    }


    //dto를 entity로 변환하는 메소드
    private Camping dtoToEntity(CampDTO dto) {
        Camping entity = new Camping();
        entity.setContentId(dto.getContentId());
        entity.setFacltNm(dto.getFacltNm());
        entity.setIntro(dto.getIntro());
        entity.setFirstImageUrl(dto.getFirstImageUrl());
        entity.setAddr1(dto.getAddr1());
        entity.setLineIntro(dto.getLineIntro());
        entity.setInduty(dto.getInduty());
        return entity;
    }

}
