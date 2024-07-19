import React, { useState, useEffect, useRef } from "react";
import "../style/Map.css";

const { kakao } = window;

const Map2 = () => {
  // 1. state
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});

  // 2. constant
  const mapRef = useRef(null); // DOM 요소(<div id="map"></div>)에 접근하기 위해 사용
  const mapInstanceRef = useRef(null); // kakao 지도 인스턴스를 저장하기 위해 사용, 이후 이 인스턴스를 참조해 지도 조작
  const markerRef = useRef(null);

  // 3. handler
  const success = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({
      lat: latitude,
      lng: longitude,
    });

    // mount 시, 위치 정보를 받아온 후 loading이 끝남을 표시해야 함
    // loading이 true → false로 상태 변동 후, 이를 감지하여 두번째 useEffect가 실행됨
    if (isLoading) {
      setIsLoading(!isLoading);
    }

    // mount 시 async 함수에서는 작동하지 않음
    // 두번째 useEffect에서 map instance와 marker 생성 후, 위치 변동 시 watchPosition 함수에서만 작동해야 함
    if (mapInstanceRef.current && markerRef.current) {
      const newPosition = new kakao.maps.LatLng(latitude, longitude);
      // mapInstanceRef.current.setCenter(newPosition);
      markerRef.current.setPosition(newPosition);
    }
  };
  const failure = (error) => console.log(error);

  // 4. useEffect
  useEffect(() => {
    // 컴포넌트 mount 시
    async function mountFunction() {
      try {
        navigator.geolocation.getCurrentPosition(success, failure);
      } catch (error) {
        console.log(
          `Getting geolocation info Failed. Please refresh this page...`
        );
        console.log(error);
      }
    }
    mountFunction();

    // unmount 시
    return () => {
      setIsLoading(true);
      setLocation({});
    };
  }, []);

  // loading 완료 후(true → false), <div#map> 생성하여 최초 지도 불러옴
  useEffect(() => {
    if (!isLoading && mapRef.current && !mapInstanceRef.current) {
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
  }, [isLoading, location]);

  // 위치 변동 시
  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(success, failure, {
        enableHighAccuracy: true,
        maximumAge: 10000,
      });

      // 컴포넌트 unmount 시 위치 추적 중단
      // 이 부분이 없으면 새로고침 혹은 새로 컴포넌트 mount 시 렌더링이 오래 걸리거나 문제가 발생할 수 있음
      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  return isLoading ? (
    <div>
      <h1>Map.jsx Loading...</h1>
    </div>
  ) : (
    <div>
      <h3>Lat: {location.lat} deg</h3>
      <h3>Lng: {location.lng} deg</h3>

      <div id="map" ref={mapRef} />
    </div>
  );
};

export default Map2;
