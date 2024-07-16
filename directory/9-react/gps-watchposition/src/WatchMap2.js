import React, { useState, useEffect, useRef } from "react";
import "./WatchMap.css";

const { kakao } = window;

const WatchMap = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const mapRef = useRef(null);  // DOM 요소(<div id="map"></div>)에 접근하기 위해 사용
  const mapInstanceRef = useRef(null);  // kakao 지도 인스턴스를 저장하기 위해 사용, 이후 이 인스턴스를 참조해 지도 조작
  const markerRef = useRef(null);

  // 컴포넌트 마운트 시
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

      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(location.lat, location.lng),
        map: mapInstance,
      });
      markerRef.current = marker;
    }
  }, [loading, location]);

  // 위치 변동 시
  useEffect(() => {
    if (navigator.geolocation) {
      const success = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          lat: latitude,
          lng: longitude,
        });

        if (mapInstanceRef.current && markerRef.current) {
          const newPosition = new kakao.maps.LatLng(latitude, longitude);
          mapInstanceRef.current.setCenter(newPosition);
          markerRef.current.setPosition(newPosition);
        }
      };
      const failure = (error) => console.log(error);

      navigator.geolocation.watchPosition(success, failure, {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      });
    }
  }, []);

  if (loading) {
    return (
      <div>
        <h1>WatchMap.js Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>WatchMap2.js</h1>
      <h3>Lat: {location.lat} deg</h3>
      <h3>Lng: {location.lng} deg</h3>

      <div id="map" ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default WatchMap;
