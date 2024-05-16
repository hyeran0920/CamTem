package com.camtem.camtemback.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "camping")
public class Camping {
    @Id
    private int contentId;
    private String facltNm;
    @Column(columnDefinition = "TEXT")
    private String intro;
    private String firstImageUrl;
    private String addr1;
    private String lineIntro;
    private String induty;
    private String doNm;//도 이름
    private double mapX; //경도
    private double mapY; //위도
    private String tel; //전화번호
    @Column(columnDefinition = "TEXT")
    private String homepage; // 홈페이지
    @Column(columnDefinition = "TEXT")
    private String resveUrl; // 예약페이지
    private String trlerAcmpnyAt; //개인 트레일러 동반여부
    private String caravAcmpnyAt; // 개인카라반 동반여부
    private int toiletCo;//화장실개수
    private int swrmCo;//샤워실 개수
    private int wtrplCo;//개수대 개수
    private String sbrsCl; //부대시설
    private int extshrCo;//소화기 개수
    private String animalCmgCl; //애완동물 출입
    private int allar;//전체면적
    private String hvofBgnde;//휴무기간 시작일
    private String hvofEnddle;//휴무기간 종료일
    @Column(columnDefinition = "TEXT")
    private String featureNm;//특징
    private String lctCl;//입지구분
    @Column(columnDefinition = "TEXT")
    private String direction;//오시는길
    private int manageNmpr;//상주관리인원
    private int sitedStnc;//사이트간 거리
    private String operPdCl;//운영기간
    private String operDeCl;//운영일
    private String brazierCl;//화로대
    private String eqpmnLendCl;//캠핑장비대여
}
