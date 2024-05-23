package com.camtem.camtemback.service;


import com.camtem.camtemback.components.CampingAPI;
import com.camtem.camtemback.components.CampingDataMapper;
import com.camtem.camtemback.components.NewCamp;
import com.camtem.camtemback.entity.Camping;
import com.camtem.camtemback.repository.CampDataRepo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CampService {
    private final CampingAPI campingAPI;
    private final CampingDataMapper campingDataMapper;
    private final CampDataRepo campDataRepo;



    public CampService(CampingAPI campingAPI, CampingDataMapper campingDataMapper, CampDataRepo campDataRepo) {
        this.campingAPI = campingAPI;
        this.campingDataMapper = campingDataMapper;
        this.campDataRepo = campDataRepo;

    }

    //엔티티를 Dto로 변환해서 리스트를 리턴하는 메소드
    public List<NewCamp> getCampList(String city){
        System.out.println(city);
        List<Camping> campList = campDataRepo.findAllByDoNmContains(city);
        List<NewCamp> campDtoList = new ArrayList<>();
        for (Camping camping : campList){
            campDtoList.add(entityToDto(camping));
        }
        return campDtoList;
    }

    //엔티티를 dto로 변환하는 메소드
    private NewCamp entityToDto(Camping camping){
        NewCamp campDto = new NewCamp();
        campDto.setContentId(camping.getContentId());
        campDto.setFacltNm(camping.getFacltNm());
        campDto.setIntro(camping.getIntro());
        campDto.setFirstImageUrl(camping.getFirstImageUrl());
        campDto.setAddr1(camping.getAddr1());
        campDto.setLineIntro(camping.getLineIntro());
        campDto.setInduty(camping.getInduty());
        campDto.setDoNm(camping.getDoNm());
        campDto.setMapX(camping.getMapX());
        campDto.setMapY(camping.getMapY());
        campDto.setTel(camping.getTel());
        campDto.setHomepage(camping.getHomepage());
        campDto.setResveUrl(camping.getResveUrl());
        campDto.setTrlerAcmpnyAt(camping.getTrlerAcmpnyAt());
        campDto.setCaravAcmpnyAt(camping.getCaravAcmpnyAt());
        campDto.setToiletCo(camping.getToiletCo());
        campDto.setSwrmCo(camping.getSwrmCo());
        campDto.setWtrplCo(camping.getWtrplCo());
        campDto.setSbrsCl(camping.getSbrsCl());
        campDto.setExtshrCo(camping.getExtshrCo());
        campDto.setAnimalCmgCl(camping.getAnimalCmgCl());
        campDto.setAllar(camping.getAllar());
        campDto.setHvofBgnde(camping.getHvofBgnde());
        campDto.setHvofEnddle(camping.getHvofEnddle());
        campDto.setFeatureNm(camping.getFeatureNm());
        campDto.setLctCl(camping.getLctCl());
        campDto.setDirection(camping.getDirection());
        campDto.setManageNmpr(camping.getManageNmpr());
        campDto.setSitedStnc(camping.getSitedStnc());
        campDto.setOperPdCl(camping.getOperPdCl());
        campDto.setOperDeCl(camping.getOperDeCl());
        campDto.setBrazierCl(camping.getBrazierCl());
        campDto.setEqpmnLendCl(camping.getEqpmnLendCl());

        return campDto;
    }


//    public Camp getCamp(double mapX, double mapY, int radius) {
//        ResponseEntity<String> response = campingAPI.getCampData(mapX, mapY, radius);
//
//        if (response.getStatusCode().is2xxSuccessful()) {
//            MediaType contentType = response.getHeaders().getContentType();
//            if (contentType != null && contentType.isCompatibleWith(MediaType.APPLICATION_JSON)) {
//                try {
//                    return campingDataMapper.mapCampData(response.getBody());
//                } catch (JsonProcessingException e) {
//                    throw new RuntimeException("Failed to map camp data", e);
//                }
//            } else if (contentType != null && contentType.isCompatibleWith(MediaType.APPLICATION_XML)) {
//                try {
//                    String jsonData = campingDataMapper.convertXmlToJson(response.getBody());
//                    return campingDataMapper.mapCampData(jsonData);
//                } catch (JsonProcessingException e) {
//                    throw new RuntimeException("Failed to convert and map camp data", e);
//                }
//            } else {
//                System.out.println(response);
//                throw new RuntimeException("Unsupported response content type: " + contentType);
//            }
//        } else {
//            throw new RuntimeException("Failed to fetch camp data: " + response.getStatusCode());
//        }
//    }
}
