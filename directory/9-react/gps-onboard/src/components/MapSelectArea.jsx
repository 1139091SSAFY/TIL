import React, { useState, useEffect, useRef } from "react";
import "../style/MapSelectArea.css";
import flagMarkerImageSrc from "../assets/flag.png";

const { kakao } = window;

const MapSelectArea = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  const [area, setArea] = useState(false);

  // const flagMarkerImageSrc = "../assets/flag.png"; // 마커 이미지 경로
  const flagMarkerImageSize = new kakao.maps.Size(64, 69); // 마커 이미지 크기
  const flarMarkerImageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커 이미지 옵션

  // 컴포넌트 마운트 시
  // 현재 사용자(방장)의 위치를 중심으로 지도 생성
  // 현재 사용자(방장)의 위치를 잡는 부분
  useEffect(() => {
    if (navigator.geolocation) {
      const success = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          lat: latitude,
          lng: longitude,
        });
        setLoading(false);
      };
      const failure = (error) => console.log(error);

      navigator.geolocation.getCurrentPosition(success, failure);
    } else {
      console.log(`navigator.geolocation Error`);
      setLoading(false);
    }
  }, []);

  // loading 완료 후, <div#map> 생성되어 최초 지도 불러옴
  useEffect(() => {
    if (!loading && mapRef.current && !mapInstanceRef.current) {
      const options = {
        center: new kakao.maps.LatLng(location.lat, location.lng),
        level: 1,
      };
      const mapInstance = new kakao.maps.Map(mapRef.current, options);
      mapInstanceRef.current = mapInstance;

      const markerImage = new kakao.maps.MarkerImage(
        flagMarkerImageSrc,
        flagMarkerImageSize,
        flarMarkerImageOption
      );
      const marker = new kakao.maps.Marker({
        position: mapInstance.getCenter(),
        image: markerImage,
        map: mapInstance,
      });

      markerRef.current = marker;

      // 지도 이동 이벤트 리스너
      kakao.maps.event.addListener(mapInstance, "center_changed", () => {
        marker.setPosition(mapInstance.getCenter());
      });
    }
  }, [loading]);

  const handleButtonClick = () => {
    if (mapInstanceRef.current) {
      const center = mapInstanceRef.current.getCenter();
      const centerLat = center.getLat();
      const centerLng = center.getLng();

      console.log(`Marker Position: ${centerLat}, ${centerLng}`);

      if (window.confirm(`이 위치로 게임을 시작하시겠습니까?`)) {
        const radius = 100;
        const circle = new kakao.maps.Circle({
          center: new kakao.maps.LatLng(centerLat, centerLng),
          radius: radius,
          strokeWeight: 5,
          strokeColor: "#75B8FA",
          strokeOpacity: 1,
          strokeStyle: "dashed",
          fillColor: "#CFE7FF",
          fillOpacity: 0.7,
        });

        circle.setMap(mapInstanceRef.current);

        // 마커 삭제
        markerRef.current.setMap(null);

        // 파란 점 추가
        const blueDot = new kakao.maps.Circle({
          center: new kakao.maps.LatLng(centerLat, centerLng),
          radius: 1,
          strokeWeight: 0,
          fillColor: "#0000FF",
          fillOpacity: 1,
        });

        blueDot.setMap(mapInstanceRef.current);

        setArea(!area);
      }
    }
  };

  // unmount 시 실행
  useEffect(() => {
    return () => {
      setLoading(true);
    };
  }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <h1>MapSelectArea.jsx Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div id="map" ref={mapRef} />
      {!area && (
        <button id="flagbtn" onClick={handleButtonClick}>
          flag
        </button>
      )}
    </div>
  );
};

export default MapSelectArea;
