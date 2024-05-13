package com.camtem.camtemback.controller;




import com.camtem.camtemback.components.Weather;


import com.camtem.camtemback.dto.WeatherReco;

import com.camtem.camtemback.service.WeatherService;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000") // 허용할 출처(origin) 지정
public class HiController {
    private final WeatherService weatherService;


    public HiController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/api/hello")
    public String  Hello(){
        System.out.println("으어");
        return "hi";
    }

    @PostMapping("/api/recommend-campsite")
    public ResponseEntity<?> recommendCampsite(@RequestBody WeatherReco request){

        Weather weatherList = weatherService.getWeather(request.getRegion(), request.getDates(), 2);

        System.out.println("이거진짜돼??");
        return ResponseEntity.ok(weatherList);
    }




}
