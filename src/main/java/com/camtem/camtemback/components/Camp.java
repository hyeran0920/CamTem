package com.camtem.camtemback.components;


import lombok.Getter;
import lombok.Setter;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

@Getter
@Setter
public class Camp {
    private Response response;


    @Getter
    @Setter
    public static class Response{
        private ResponseHeader header;
        private ResponseBody body;
    }
    @Getter
    @Setter
    public static class ResponseHeader {
        private String resultCode;
        private String resultMsg;

        // Getters and setters
    }

    @Getter
    @Setter
    public static class ResponseBody {
        private ItemList items;

        // Getters and setters
    }
    @Getter
    @Setter
    public static class ItemList {
        @JsonProperty("item")
        private List<CampingItem> itemList;

        // Getters and setters
    }

    @Getter
    @Setter
    public static class CampingItem {
        private String contentId;
        private String facltNm;
        private String intro;
        private String firstImageUrl;
        private String addr1; // 주소
        private String lineIntro; // 한줄소개
        private String induty; // 야영장 분류

    }

}

