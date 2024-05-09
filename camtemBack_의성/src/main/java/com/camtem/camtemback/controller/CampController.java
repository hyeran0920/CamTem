package com.camtem.camtemback.controller;


import com.camtem.camtemback.components.Camp;
import com.camtem.camtemback.dto.CampReco;
import com.camtem.camtemback.service.CampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CampController {
    private final CampService campService;

    public CampController(CampService campService) {
        this.campService = campService;
    }

    @PostMapping("/api/productlist")
    public ResponseEntity<?> showCampsite(@RequestBody CampReco request) {
        double mapX = request.getMapX();
        double mapY = request.getMapY();
        int radius = request.getRadius();

        try {
            Camp campList = campService.getCamp(mapX, mapY, radius);
            return ResponseEntity.ok(campList);
        } catch (RuntimeException e) {
            String errorMessage = "Failed to fetch camp data: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }
}