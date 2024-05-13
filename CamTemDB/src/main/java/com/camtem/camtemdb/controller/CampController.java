package com.camtem.camtemdb.controller;

import com.camtem.camtemdb.dto.CampDTO;
import com.camtem.camtemdb.service.CampService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/camps")
@RequiredArgsConstructor
public class CampController {
    private final CampService campService;

//데이터 불러오는지 확인용
    @GetMapping("/fetch")
    public ResponseEntity<List<CampDTO>> fetchCampingData(@RequestParam(defaultValue = "1") int pageNo) {
        List<CampDTO> campDTOs = campService.fetchCampingData(pageNo);
        return ResponseEntity.ok(campDTOs);
    }

    //postman에서 /api/camps/save를 get요청으로 하면 이거 실행
    @GetMapping("/save")
    public ResponseEntity<String> saveCampingData() {
        campService.fetchAndSaveAllCampingData();
        return ResponseEntity.ok("데이터저장성공");
    }

}
