package com.camtem.camtemback.service;



import com.camtem.camtemback.components.Camping;
import com.camtem.camtemback.components.CampingAPI;
import com.camtem.camtemback.components.Weather;
import com.camtem.camtemback.components.WeatherAPI;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class CampService {

   private final WeatherAPI weatherAPI;


   public CampService(WeatherAPI weatherAPI){
       this.weatherAPI = weatherAPI;
   }


//    public Weather getWeather(String region,String date){
//        return weatherAPI.getWeather(region,date);
//    }

    public Weather getWeather(String region, List<String> dates) {
        // dates를 weatherAPI가 요구하는 형식으로 변환합니다.
        String formattedDates = String.join(",", dates); // 예: "20240506,20240507"

        // weatherAPI 호출 시 올바른 형식의 날짜를 전달합니다.
        return weatherAPI.getWeather(region, formattedDates);
    }


}
