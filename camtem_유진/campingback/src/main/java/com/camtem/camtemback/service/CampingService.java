package com.camtem.camtemback.service;

import com.camtem.camtemback.components.Camping;
import com.camtem.camtemback.components.CampingAPI;
import org.springframework.stereotype.Service;

@Service
public class CampingService {

    private final CampingAPI campingAPI;

    public CampingService(CampingAPI campingAPI) {
        this.campingAPI = campingAPI;
    }

    public Camping getCamping() {
        // CampingAPI 인스턴스 메소드 호출
        return campingAPI.getCamping();
    }
}

