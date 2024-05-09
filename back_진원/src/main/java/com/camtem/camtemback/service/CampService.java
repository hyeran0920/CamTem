package com.camtem.camtemback.service;


import com.camtem.camtemback.components.Weather;
import com.camtem.camtemback.components.WeatherAPI;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CampService {
   private final WeatherAPI weatherAPI;

   public CampService(WeatherAPI weatherAPI){
       this.weatherAPI = weatherAPI;
   }


   public Weather getWeather(String region,String date,int numPeople){
       return weatherAPI.getWeather(region,date);
   }

}
