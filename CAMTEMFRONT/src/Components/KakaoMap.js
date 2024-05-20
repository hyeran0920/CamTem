/*global kakao */
import React, { useEffect } from "react";
const KakaoMap = ({ camping }) => {
    useEffect(() => {
        if (camping) {
            // map 띄우기
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(camping.mapY, camping.mapX),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);

            // map에 마커 띄우기
            var markerPosition = new kakao.maps.LatLng(camping.mapY, camping.mapX);
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        }
    }, [camping]); // camping 상태가 변경될 때마다 useEffect가 실행됨


    return (
        <div>
            <div id="map" style={{ width: "80%", height: "400px", margin:"0 auto" }}></div>
        </div>
    )
}

export default KakaoMap;