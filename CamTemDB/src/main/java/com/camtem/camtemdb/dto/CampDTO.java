package com.camtem.camtemdb.dto;


import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CampDTO {
    private int contentId;
    private String facltNm;
    private String intro;
    private String firstImageUrl;
    private String addr1; // 주소
    private String lineIntro; // 한줄소개
    private String induty; // 야영장 분류


}


