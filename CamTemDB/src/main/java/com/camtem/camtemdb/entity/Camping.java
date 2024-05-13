package com.camtem.camtemdb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="camping")
public class Camping {
   @Id
    private int contentId;
    private String facltNm;
    @Column(length = 4096)
    private String intro;
    private String firstImageUrl;
    private String addr1;
    private String lineIntro;
    private String induty;



}
