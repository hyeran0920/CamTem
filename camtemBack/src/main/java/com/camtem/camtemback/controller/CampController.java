package com.camtem.camtemback.controller;


import com.camtem.camtemback.components.Camp;
import com.camtem.camtemback.components.NewCamp;
import com.camtem.camtemback.dto.CampReco;
import com.camtem.camtemback.service.CampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CampController {
    private final CampService campService;

    public CampController(CampService campService) {
        this.campService = campService;
    }

//    @PostMapping("/api/productlist")
//    public ResponseEntity<?> showCampsite(@RequestBody CampReco request) {
//        double mapX = request.getMapX();
//        double mapY = request.getMapY();
//        int radius = request.getRadius();
//
//        try {
//            Camp campList = campService.getCamp(mapX, mapY, radius);
//            return ResponseEntity.ok(campList);
//        } catch (RuntimeException e) {
//            String errorMessage = "Failed to fetch camp data: " + e.getMessage();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
//        }
//    }
    //도시 이름 하나만 보내면 되니까
    @GetMapping("/api/productlist")
    public List<NewCamp> camps(@RequestParam String city){
    List<NewCamp> campList = campService.getCampList(city);
        System.out.println("ㅎㅇㅎㅇ");
        System.out.println(campList.size());
        return campList;
    }

}