import React, { useState, useEffect, useRef } from "react";
import Marker from "./Marker";
import "./Map.css";

const { kakao } = window;

const Map = (props) => {
  const [myPosition, setMyPosition] = useState({
    lat: props.lat,
    lng: props.lng,
  });
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // kakao 지도 API 로드 확인
    if (!kakao.maps) return;

    if (mapRef.current) {
      const options = {
        center: new kakao.maps.LatLng(myPosition.lat, myPosition.lng),
        level: 1,
      };
      const mapInstance = new kakao.maps.Map(mapRef.current, options);
      setMap(mapInstance);
    }

    return () => {
      if (map) {
        map.relayout();
      }
    };
  }, []);

  useEffect(() => {
    if (map) {
      // 지도의 중심을 새로운 위치로 이동
      map.setCenter(new kakao.maps.LatLng(myPosition.lat, myPosition.lng));
    }
  }, [myPosition, map]);

  useEffect(() => {
    // 위치 추적 설정
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setMyPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error watching position:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    // 컴포넌트가 언마운트될 때 위치 추적 해제
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <div>
      <hr />
      <h1>WatchMap</h1>
      <div
        id="map"
        ref={mapRef}
        style={{ width: "500px", height: "400px" }}
      ></div>
      {map && <Marker map={map} position={myPosition} />}
    </div>
  );
};

export default Map;
