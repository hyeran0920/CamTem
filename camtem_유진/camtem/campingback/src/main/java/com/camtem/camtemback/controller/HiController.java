package com.camtem.camtemback.controller;


import com.camtem.camtemback.components.Weather;
import com.camtem.camtemback.dto.CampReco;
import com.camtem.camtemback.service.CampService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;


@RestController
@RequiredArgsConstructor
public class HiController {
  private final CampService campService;


//    @GetMapping("/api/hello")
//    public ResponseEntity<?> testWeather() {
//        String region="Seoul";
//        String date="20240510";
//        Weather weather = campService.getWeather(region, date);
//        Weather filteredWeather = weather.filterWeatherByDate(date);
//        return ResponseEntity.ok(filteredWeather);
//    }

//    @GetMapping("/api/hello")
//    public ResponseEntity<Weather> testWeather() {
//        // region을 "Seoul"로 명시적으로 지정합니다.
//        String region = "Seoul";
//
//        // 날짜 목록을 올바르게 초기화합니다.
//        List<String> dates = Arrays.asList("20240506", "20240507","20240508");
//
//        // 주어진 지역의 전체 날씨 데이터를 가져옵니다.
//        // `getWeather` 메소드가 `region`과 `dates`를 받는다고 가정합니다.
//        Weather weather = campService.getWeather(region, dates);
//
//        // 원하는 날짜에 해당하는 날씨 데이터를 필터링합니다.
//        Weather filteredWeather = weather.filterWeatherByDate(dates);
//
//        // 필터링된 날씨 데이터를 응답으로 반환합니다.
//        return ResponseEntity.ok(filteredWeather);
//    }

    @PostMapping("/api/recommend-campsite")
    public ResponseEntity<Weather> postWeatherData(@RequestBody CampReco request) {
        // WeatherRequest 객체에서 region과 dates를 추출합니다.
        String region = request.getRegion();
        List<String> dates = request.getDates();

        Weather weather = campService.getWeather(region, dates);

//        // 원하는 날짜에 해당하는 날씨 데이터를 필터링합니다.
        Weather filteredWeather = weather.filterWeatherByDate(dates);

        System.out.println("Filtered Weather Data: " + filteredWeather);

        // 필터링된 날씨 데이터를 응답으로 반환합니다.
        return ResponseEntity.ok(filteredWeather);
    }



//    @PostMapping("/api/recommend-campsite")
//    public ResponseEntity<?> recommendCampsite(@RequestBody CampReco request){
//        Weather weatherList = campService.getWeather(request.getRegion(), request.getDate());
//        System.out.println("이거진짜돼??");
//        return ResponseEntity.ok(weatherList);
//    }

}
