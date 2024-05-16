package com.camtem.camtemback.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CampReco {
    private Double mapX; // 추가: 지도 X 좌표
    private Double mapY; // 추가: 지도 Y 좌표
    private Integer radius; //해당 지점으로부터 반경
}
