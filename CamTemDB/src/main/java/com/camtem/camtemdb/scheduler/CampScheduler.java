package com.camtem.camtemdb.scheduler;

import com.camtem.camtemdb.service.CampService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CampScheduler {
    private final CampService campService;

//    @Scheduled(cron = "0 0 0 * * ?") //매일 자정을 의미함
    @Scheduled(initialDelay = 60000)//테스트 용으로 프로젝트 실행 1분뒤에 api요청보내고 데이터 저장하게 해둠
    public void scheduleTaskUsingCronExpression(){
        campService.fetchAndSaveAllCampingData();
        System.out.println("스케줄작업 실행완료");
    }
}
