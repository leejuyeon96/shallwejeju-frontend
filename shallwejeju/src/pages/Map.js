import { useEffect, useRef } from "react";


const KakaoMap = () => {

    // var container = document.getElementById('map');
    const mapRef = useRef(null); // hook (참조)
		var options = {
			center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
			level: 3
		};

    // 마커가 표시될 위치입니다 
   // var markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667); 

    // 마커를 생성합니다
  //  var marker = new window.kakao.maps.Marker({
  //      position: markerPosition
  //  });

   // useEffect(() => {
  //      var map = new window.kakao.maps.Map(mapRef.current, options);
        // 마커가 지도 위에 표시되도록 설정합니다
  //      marker.setMap(map);
 //   }, [])
	
    return <div ref={mapRef} style={{width: "100%", height:"100vh"}}></div>;
}

export default KakaoMap;