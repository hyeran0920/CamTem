package com.camtem.camtemback.components;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpStatus;

@Component
public class CampingAPI {

    private final RestTemplate restTemplate;

    public CampingAPI(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public Camping getCamping() {
        // API 요청 URL
        String url = "http://apis.data.go.kr/B551011/GoCamping/searchList?serviceKey=kpznyRO%2Bj%2BQrqgHf88dGEFWQ27h0A6d%2FfoqRDlYX2hveqpGN%2F9y6xda7hcdmJCJip6UoIdI3Pm7EEXiiArHyDg%3D%3D&MobileOS=ETC&MobileApp=AppTest&numOfRows=100&_type=json&keyword=%EC%95%BC%EC%98%81%EC%9E%A5";

        // API 호출
        ResponseEntity<Camping> response = restTemplate.getForEntity(url, Camping.class);

        // 응답 데이터 로깅
        System.out.println("API 응답 데이터: " + response.getBody());

        if (response.getStatusCode() == HttpStatus.OK) {
            // 정상적인 응답인 경우 Camping 객체를 반환
            Camping campingData = response.getBody();

            // cList가 null인지 확인
            if (campingData.getCList() == null) {
                throw new RuntimeException("API 응답에서 cList 필드가 null입니다.");
            }

            // 응답 데이터의 각 CampingList를 순회하며 출력
            for (Camping.CampingList campingList : campingData.getCList()) {
                Camping.CampingList.CampIntroduce campIntroduce = campingList.getCIntroduce();

                // 캠핑장 이름과 소개 출력
                System.out.println("캠핑장 이름: " + campIntroduce.getFacltNm());
                System.out.println("캠핑장 소개: " + campIntroduce.getIntro());
            }

            return campingData;
        } else {
            // API 호출 실패 시 예외를 발생시킴
            throw new RuntimeException("API 호출 실패: " + response.getStatusCode());
        }
    }


}
