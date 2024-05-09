package com.camtem.camtemback.service;


import com.camtem.camtemback.components.Weather;
import com.camtem.camtemback.components.WeatherAPI;

import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class WeatherService {
   private final WeatherAPI weatherAPI;

   public WeatherService(WeatherAPI weatherAPI){
       this.weatherAPI = weatherAPI;
   }


   public Weather getWeather(String region,List<String> dates,int numPeople){
       Weather weather = weatherAPI.getWeather(region); //여기에 16일치 날씨 다저장돼있음
       Weather result = new Weather(); // 여기에 사용자가 선택한 날씨를 담을것

       //날짜를 기반으로 DailyWeather객체를 필터링
       result.setList(weather.getList().stream()
               .filter(dailyWeather -> dates.contains(convertTimestampToDate(dailyWeather.getDt())))
               .collect(Collectors.toList()));

       return result;
   }

    // Unix timestamp를 'yyyy-MM-dd' 형식의 문자열로 변환하는 메서드
    private String convertTimestampToDate(long timestamp) {
        return Instant.ofEpochSecond(timestamp)
                .atZone(ZoneId.systemDefault())
                .toLocalDate()
                .format(DateTimeFormatter.ISO_LOCAL_DATE);
    }


}
