package com.camtem.camtemback.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class WeatherReco {
    private String region;
    private List<String> dates;
    private int numPeople;

}
