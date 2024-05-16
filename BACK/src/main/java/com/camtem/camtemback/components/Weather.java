package com.camtem.camtemback.components;


import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

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
        private FeelsLike feels_like;
        private int humidity;

        private double pop;
        private Double rain;



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

        @Getter
        @Setter
        public static class FeelsLike{
            private double day;
            private double night;
            private double eve;
            private double morn;
        }




    }
}