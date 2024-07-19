import React, { useState, useEffect, useRef } from "react";
import "../style/Map.css";

const { kakao } = window;

const WatchMap = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const mapRef = useRef(null); // DOM 요소(<div id="map"></div>)에 접근하기 위해 사용
  const mapInstanceRef = useRef(null); // kakao 지도 인스턴스를 저장하기 위해 사용, 이후 이 인스턴스를 참조해 지도 조작
  const markerRef = useRef(null);

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({
      lat: latitude,
      lng: longitude,
    })
    setLoading(false);
  }
  const failure = (error) => console.log(error);

  useEffect(() => {
    // 컴포넌트 mount 시
    async function mountFunction() {
      try {
        navigator.geolocation.getCurrentPosition(success, failure);
      } catch (error) {
        console.log(`Getting geolocation info Failed. Please refresh this page...`);
        console.log(error);
      }
    };
    mountFunction();

    // unmount 시
    return (() => {
      setLoading(true);
      setLocation({});
    })
  }, []);

  // loading 완료 후(true → false), <div#map> 생성하여 최초 지도 불러옴
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
          // mapInstanceRef.current.setCenter(newPosition);
          markerRef.current.setPosition(newPosition);
        }
      };

      const watchId = navigator.geolocation.watchPosition(success, failure, {
        enableHighAccuracy: true,
        maximumAge: 10000,
      });

      // 컴포넌트 unmount 시 위치 추적 중단
      // 이 부분이 없으면 새로고침 혹은 새로 컴포넌트 mount 시 렌더링이 오래 걸리거나 문제가 발생할 수 있음
      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Map.jsx Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h3>Lat: {location.lat} deg</h3>
      <h3>Lng: {location.lng} deg</h3>

      <div id="map" ref={mapRef} />
    </div>
  );
};

export default WatchMap;
