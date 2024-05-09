package com.camtem.camtemback.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CampReco {
    private String region;
    private String date;
    private List<String> dates;
    private int numPeople;
}
