package com.camtem.camtemdb.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CampingResponse {
    private ResponseBody response;

    @Getter
    @Setter
    public static class ResponseBody {
        private HeaderInfo header;
        private Items body;
    }

    @Getter
    @Setter
    public static class HeaderInfo {
        private String resultCode;
        private String resultMsg;
    }

    @Getter
    @Setter
    public static class Items {
        private ItemList items;
        private int totalCount;
    }

    @Getter
    @Setter
    public static class ItemList {
        private List<CampDTO> item;
    }
}
