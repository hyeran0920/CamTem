package com.camtem.camtemback.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CampingDTO {

    private String contentId;
    private String firstImageUrl; // 'firstImageUr' 대신 'firstImageUrl'
    private String facltNm;
    private String addr1;
    private String intro;
    private String sbrsCl;
    private String posblFcltyCl;
    private String tel;
    private String operPdCl;
    private String operDeCl;
    private String mapX; // 지도 관련 데이터
    private String mapY; // 지도 관련 데이터
    private String sigunguNm; // 시/군/구 정보



    // 지역과 날짜 관련 데이터는 API에서 반환된 데이터를 바탕으로 필요한 경우 추가하세요.
}
