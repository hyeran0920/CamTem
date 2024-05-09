package com.camtem.camtemback.components;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Weather {
    private List<DailyWeather> list;

    // Getters, Setters

    @Getter
    @Setter
    public static class DailyWeather {
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
    }
}