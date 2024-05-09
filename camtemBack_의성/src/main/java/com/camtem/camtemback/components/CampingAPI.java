package com.camtem.camtemback.components;

import com.camtem.camtemback.dto.CampReco;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.*;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

@Component
public class CampingAPI {


    private final RestTemplate restTemplateC;

    public CampingAPI(RestTemplateBuilder restTemplateBuilder){

        this.restTemplateC = restTemplateBuilder.build();

    }

    public ResponseEntity<String> getCampData(double mapX, double mapY, int radius){
        final String myKey = "kpznyRO%2Bj%2BQrqgHf88dGEFWQ27h0A6d%2FfoqRDlYX2hveqpGN%2F9y6xda7hcdmJCJip6UoIdI3Pm7EEXiiArHyDg%3D%3D";
//        String myKey = "kpznyRO+j+QrqgHf88dGEFWQ27h0A6d/foqRDlYX2hveqpGN/9y6xda7hcdmJCJip6UoIdI3Pm7EEXiiArHyDg==";
        String url="http://apis.data.go.kr/B551011/GoCamping/locationBasedList?serviceKey="+myKey+"&MobileOS=ETC&MobileApp=AppTest&numOfRows=40&mapX={mapX}&mapY={mapY}&radius={radius}&_type=json";
        return restTemplateC.getForEntity(url, String.class,mapX,mapY,radius);
    }
}