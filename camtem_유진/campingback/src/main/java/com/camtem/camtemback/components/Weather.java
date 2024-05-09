package com.camtem.camtemback.components;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class Weather {
    private List<DailyWeather> list;

    // DailyWeather 클래스 내부에 날짜 형식을 yyyyMMdd로 변환하여 반환하는 메서드를 추가합니다.
    @Getter
    @Setter
    public static class DailyWeather {
        // 기존의 getDt() 메서드 (long 타입 반환)
        @Getter
        private long dt;
        private Temperature temp;
        private List<WeatherDescription> weather;

        @Getter
        @Setter
        public static class Temperature {
            private double day;
            private double min;
            private double max;
        }

        @Getter
        @Setter
        public static class WeatherDescription {
            private String main;
            private String description;
        }

        // Getter 메서드에서 dt 값을 yyyyMMdd 형식으로 변환하여 반환합니다.
        public String getFormattedDt() {
            // long dt를 원하는 형식으로 변환합니다.
            Instant instant = Instant.ofEpochSecond(dt);
            ZonedDateTime zonedDateTime = instant.atZone(ZoneId.of("Asia/Seoul"));
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
            return zonedDateTime.format(formatter);
        }

    }
//    // 원하는 날짜에 해당하는 DailyWeather 객체만 필터링합니다.
//    public Weather filterWeatherByDate(String date) {
//        List<DailyWeather> filteredList = list.stream()
//                .filter(dailyWeather -> dailyWeather.getFormattedDt().equals(date))
//                .collect(Collectors.toList());
//
//        // 필터링된 목록을 새로운 Weather 객체에 설정합니다.
//        Weather filteredWeather = new Weather();
//        filteredWeather.setList(filteredList);
//
//        // 필터링된 Weather 객체를 반환합니다.
//        return filteredWeather;
//    }
public Weather filterWeatherByDate(List<String> dates) {
    // 주어진 dates 목록에 해당하는 DailyWeather 객체만 필터링합니다.
    List<DailyWeather> filteredList = list.stream()
            .filter(dailyWeather -> dates.contains(dailyWeather.getFormattedDt()))
            .collect(Collectors.toList());

    // 필터링된 목록을 새로운 Weather 객체에 설정합니다.
    Weather filteredWeather = new Weather();
    filteredWeather.setList(filteredList);

    // 필터링된 Weather 객체를 반환합니다.
    return filteredWeather;
}

}
