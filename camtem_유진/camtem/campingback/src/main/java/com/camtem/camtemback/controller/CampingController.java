package com.camtem.camtemback.controller;

import com.camtem.camtemback.components.Camping;
import com.camtem.camtemback.service.CampService;
import com.camtem.camtemback.service.CampingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


@RestController
public class CampingController {

    // 서비스 클래스 주입
    private final CampingService campingService;

    // CampService 의존성을 생성자 주입
    public CampingController(CampingService campingService) {
        this.campingService = campingService;
    }

    @GetMapping("/api/hello")
    public ResponseEntity<Camping> testCamping() {

        Camping camping = campingService.getCamping();
        System.out.println(camping);
        return ResponseEntity.ok(camping);
    }
}
