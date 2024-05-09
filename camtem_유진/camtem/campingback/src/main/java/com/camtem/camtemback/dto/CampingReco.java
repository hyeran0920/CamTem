package com.camtem.camtemback.dto;

import lombok.Getter;
import lombok.Setter;

//사용자 검색창에 넣은 값들
//캠핑장 dto : 지역 위치, 지도 등
@Getter
@Setter
public class CampingReco {
    private String region;
    private String date;
    private int numPeople;
}
