package com.camtem.camtemback.components;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.springframework.stereotype.Component;

@Component
public class CampingDataMapper {
    private final ObjectMapper jsonMapper;
    private final XmlMapper xmlMapper;

    public CampingDataMapper(ObjectMapper objectMapper) {
        this.jsonMapper = objectMapper;
        this.xmlMapper = new XmlMapper();
    }

    public Camp mapCampData(String jsonData) throws JsonProcessingException {
        return jsonMapper.readValue(jsonData, Camp.class);
    }

    public String convertXmlToJson(String xmlData) throws JsonProcessingException {
        JsonNode jsonNode = xmlMapper.readTree(xmlData);
        return jsonMapper.writeValueAsString(jsonNode);
    }
}
