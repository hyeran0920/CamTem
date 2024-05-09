package com.camtem.camtemback.controller;


import com.camtem.camtemback.components.Weather;
import com.camtem.camtemback.dto.CampReco;
import com.camtem.camtemback.service.CampService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
public class HiController {
  private final CampService campService;


    @GetMapping("/api/hello")
    public String  Hello(){
        System.out.println("으어");
        return "hi";
    }
    @PostMapping("/api/recommend-campsite")
    public ResponseEntity<?> recommendCampsite(@RequestBody CampReco request){
        Weather weatherList = campService.getWeather(request.getRegion(), request.getDate(), 2);
        System.out.println("이거진짜돼??");
        return ResponseEntity.ok(weatherList);
    }


}
