package com.camtem.camtemback.components;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class WeatherAPI {
    private final RestTemplate restTemplate;

    public WeatherAPI(RestTemplateBuilder restTemplateBuilder){
        this.restTemplate = restTemplateBuilder.build();
    }
    public Weather getWeather(String region){
        String url = "http://api.openweathermap.org/data/2.5/forecast/daily?q={region}&cnt=16&appid=a4c7b6d4736add0a40a6369aec10ddf6&units=metric";
//        String url = "https://pro.openweathermap.org/data/2.5/forecast/climate?q={region}&cnt=30&appid=a4c7b6d4736add0a40a6369aec10ddf6&units=metric";
        ResponseEntity<Weather> response = restTemplate.getForEntity(url,Weather.class,region);
        return response.getBody();
    }
}
