/*global kakao */
import React, { useEffect } from "react";

const KakaoMap = () => {

    useEffect(() => {
        //map 띄우기
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);

        //map에 마커 띄우기
        var markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])


    return (
        <div>
            <div id="map" style={{ width: "80%", height: "400px", margin:"0 auto" }}></div>
        </div>
    )
}

export default KakaoMap;