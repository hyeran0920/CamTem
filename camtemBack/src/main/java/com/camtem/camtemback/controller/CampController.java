package com.camtem.camtemback.controller;



import com.camtem.camtemback.components.NewCamp;
import com.camtem.camtemback.service.CampService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CampController {
    private final CampService campService;

    public CampController(CampService campService) {
        this.campService = campService;
    }

    @GetMapping("/api/productlist")
    public List<NewCamp> camps(@RequestParam String city){
    List<NewCamp> campList = campService.getCampList(city);
        System.out.println("ㅎㅇㅎㅇ");
        System.out.println(campList.size());
        return campList;
    }

    @GetMapping("/camping")
    public List<NewCamp> camping(@RequestParam String city){
        List<NewCamp> campList = campService.getCampList(city);
        System.out.println("ㅎㅇㅎㅇ");
        System.out.println(campList.size());
        return campList;
    }

}