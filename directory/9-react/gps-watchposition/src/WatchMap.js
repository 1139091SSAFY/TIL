import React, { useState, useEffect, useRef } from "react";
import Marker from "./Marker";
import "./WatchMap.css";

const { kakao } = window;

const WatchMap = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  // 컴포넌트 마운트 시
  useEffect(() => {
    // geolocation 사용 가능 시
    if (navigator.geolocation) {
      // 현재 위치를 성공적으로 받아왔다면
      const success = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          lat: latitude,
          lng: longitude,
        });
        setLoading(false);
      };
      // 현재 위치를 받아오는 데 실패했다면
      const failure = (error) => console.log(error);

      navigator.geolocation.getCurrentPosition(success, failure);
    } else {
      // geolocation 사용 불가능 시
      console.log(`navigator.geolocation Error`);
      setLoading(false);
      return (
        <div>
          <h1>navigator.geolocation Error</h1>
        </div>
      );
    }
  }, []);

  // loading 완료 후, <div#map> 생성되어 최초 지도 불러옴
  useEffect(() => {
    // geolocation이 사용 가능하다면
    if (navigator.geolocation) {
      const success = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          lat: latitude,
          lng: longitude,
        });
      };
      const failure = (error) => console.log(error)

      navigator.geolocation.watchPosition(success, failure, {
        enableHighAccuracy: true, // true: 더 정확한 위치를 제공받지만 반응 시간/전력 소모 증가, false: 적은 시간/전력으로 위치 정보를 리턴
        maximumAge: 10000,  // 캐시에 저장한 위치정보를 대신 반환할 수 있는 최대 시간(ms)을 나타내는 양의 long값 (0: 장치가 위치 캐시정보를 사용x, default: Infinity)
        timeout: 5000,  // 기기가 위치를 반환할 때 소모할 수 있는 최대 시간(ms)을 나타내는 양의 long값(default: Infinity)
      });

      if (mapRef.current) {
        const options = {
          center: new kakao.maps.LatLng(location.lat, location.lng),
          level: 1,
        };
        const mapInstance = new kakao.maps.Map(mapRef.current, options);
        setMap(mapInstance);

        // map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));
      }
    }
  }, [loading]);

  // 최초 지도 호출 이후, 위치 변동
  useEffect(() => {
    // geolocation이 사용 가능하다면
    if (navigator.geolocation) {
      const success = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          lat: latitude,
          lng: longitude,
        });
      };
      const failure = (error) => console.log(error)

      navigator.geolocation.watchPosition(success, failure, {
        enableHighAccuracy: true, // true: 더 정확한 위치를 제공받지만 반응 시간/전력 소모 증가, false: 적은 시간/전력으로 위치 정보를 리턴
        maximumAge: 10000,  // 캐시에 저장한 위치정보를 대신 반환할 수 있는 최대 시간(ms)을 나타내는 양의 long값 (0: 장치가 위치 캐시정보를 사용x, default: Infinity)
        timeout: 5000,  // 기기가 위치를 반환할 때 소모할 수 있는 최대 시간(ms)을 나타내는 양의 long값(default: Infinity)
      });

      if (mapRef.current) {
        const options = {
          center: new kakao.maps.LatLng(location.lat, location.lng),
          level: 1,
        };
        // 새 지도를 만들어서...
        const mapInstance = new kakao.maps.Map(mapRef.current, options);
        setMap(mapInstance);

        // map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));
      }
    }
  }, [loading, location]);

  if (loading) {
    return (
      <div>
        <h1>WatchMap.js Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>WatchMap.js</h1>
      <h3>Lat: {location.lat} deg</h3>
      <h3>Lng: {location.lng} deg</h3>

      <div id="map" ref={mapRef}></div>
      {map && <Marker map={map} location={location} />}
    </div>
  );
};

export default WatchMap;
