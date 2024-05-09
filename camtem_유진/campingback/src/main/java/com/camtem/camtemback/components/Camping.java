package com.camtem.camtemback.components;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Camping {
    private List<CampingList> cList;

    @Getter
    @Setter
    public static class CampingList{

        private long contentId;
        private CampIntroduce cIntroduce;
        private List<CampWhere> cWhere;
        private List<CampReservation> cReservation;
        private List<CampOpen> cOpen;

        @Getter
        @Setter
        public static class CampIntroduce{
            //캠핑장 이름
            private String facltNm;
            //캠핑장 대표 이미지
            private String firstImageUr;
            //캠핑장 짧은 소개
            private String lineIntro;
            //캠핑장 소개
            private String intro;
            //운영기관 이름
            private String mgcDiv;
            //캠핑장 전화번호
            private String tel;
            //캠핑장 편의시설 : 얘를 배열로 할지 그냥 String으로 할 지 모르겠다
            private String sbrsCl;
            //캠핑장 주변 시설
            private String posblFcltyCl;
        }

        @Getter
        @Setter
        public static class CampWhere{

            //캠핑장 위치 : 숲 / 바다
            private String lctCl;
            //캠핑장 위치 : 도 이름
            private String doNm;
            //캠핑장 시/군/구 이름
            private String sigunguNm;
            //우편번호
            private int zipcode;
            //캠핑장 주소
            private String addr1;

        }

        @Getter
        @Setter
        public static class CampReservation{

            //캠핑장 예약
            private String resveCI;
            //캠핑장 예약 URl
            private String resveUrl;

        }

        @Getter
        @Setter
        public static class CampOpen{
            
            //캠핑장 운영기간
            private String operPdCl;
            //캠핑장 운영일
            private String operDeCl;

        }
    }
}
