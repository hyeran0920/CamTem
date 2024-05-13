package com.camtem.camtemback.service;

import com.camtem.camtemback.components.Camp;
import com.camtem.camtemback.components.CampingAPI;
import com.camtem.camtemback.components.CampingDataMapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CampService {
    private final CampingAPI campingAPI;
    private final CampingDataMapper campingDataMapper;

    public CampService(CampingAPI campingAPI, CampingDataMapper campingDataMapper) {
        this.campingAPI = campingAPI;
        this.campingDataMapper = campingDataMapper;
    }

    public Camp getCamp(double mapX, double mapY, int radius) {
        ResponseEntity<String> response = campingAPI.getCampData(mapX, mapY, radius);

        if (response.getStatusCode().is2xxSuccessful()) {
            MediaType contentType = response.getHeaders().getContentType();
            if (contentType != null && contentType.isCompatibleWith(MediaType.APPLICATION_JSON)) {
                try {
                    return campingDataMapper.mapCampData(response.getBody());
                } catch (JsonProcessingException e) {
                    throw new RuntimeException("Failed to map camp data", e);
                }
            } else if (contentType != null && contentType.isCompatibleWith(MediaType.APPLICATION_XML)) {
                try {
                    String jsonData = campingDataMapper.convertXmlToJson(response.getBody());
                    return campingDataMapper.mapCampData(jsonData);
                } catch (JsonProcessingException e) {
                    throw new RuntimeException("Failed to convert and map camp data", e);
                }
            } else {
                System.out.println(response);
                throw new RuntimeException("Unsupported response content type: " + contentType);
            }
        } else {
            throw new RuntimeException("Failed to fetch camp data: " + response.getStatusCode());
        }
    }
}
