package com.camtem.camtemdb.api;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Component
public class CampingAPI {
    private final RestTemplate restTemplateC;
    private final String serviceKey;
    private final String baseUrl;

    public CampingAPI(RestTemplateBuilder restTemplateBuilder){

        this.restTemplateC = restTemplateBuilder.build();
        this.serviceKey="kpznyRO%2Bj%2BQrqgHf88dGEFWQ27h0A6d%2FfoqRDlYX2hveqpGN%2F9y6xda7hcdmJCJip6UoIdI3Pm7EEXiiArHyDg%3D%3D";
        this.baseUrl="http://apis.data.go.kr/B551011/GoCamping/basedList?";
    }

    public ResponseEntity<String> getCampData(int pageNo){
        URI uri = UriComponentsBuilder.fromHttpUrl(baseUrl)
                .queryParam("serviceKey",serviceKey)
                .queryParam("MobileOS", "ETC")
                .queryParam("MobileApp", "AppTest")
                .queryParam("numOfRows", "100")
                .queryParam("pageNo",pageNo)
                .queryParam("_type", "json")
                .build(true)
                .toUri();

//        System.out.println(uri);
        return restTemplateC.getForEntity(uri, String.class);

    }


}
