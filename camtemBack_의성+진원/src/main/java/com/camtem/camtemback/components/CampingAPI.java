package com.camtem.camtemback.components;


import org.springframework.boot.web.client.RestTemplateBuilder;

import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Collections;


@Component
public class CampingAPI {


    private final RestTemplate restTemplateC;

    private final String serviceKey;
    private final String baseUrl;

    public CampingAPI(RestTemplateBuilder restTemplateBuilder){

        this.restTemplateC = restTemplateBuilder.build();
        this.serviceKey="X9F8sbE9AswIGdXTkEMRuTQ3Thf9YhnNBqbTxbDGGhFZPV102t1ga%2FRE2Sa1EPtRRKQYAJr4HbkWSqULP5aPTw%3D%3D";
        this.baseUrl="http://apis.data.go.kr/B551011/GoCamping/locationBasedList?";
    }

    public ResponseEntity<String> getCampData(double mapX, double mapY, int radius){
        URI uri = UriComponentsBuilder.fromHttpUrl(baseUrl)
                .queryParam("serviceKey",serviceKey)
                .queryParam("MobileOS", "ETC")
                .queryParam("MobileApp", "AppTest")
                .queryParam("numOfRows", "40")
                .queryParam("mapX", mapX)
                .queryParam("mapY", mapY)
                .queryParam("radius", radius)
                .queryParam("_type", "json")
                .build(true)
                .toUri();

        System.out.println(uri);
        return restTemplateC.getForEntity(uri, String.class);

    }
}