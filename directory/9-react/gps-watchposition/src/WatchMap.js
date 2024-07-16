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

  // 현재 위치 변경 시
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
      navigator.geolocation.watchPosition(success);

      if (mapRef.current) {
        const options = {
          center: new kakao.maps.LatLng(location.lat, location.lng),
          level: 1,
        };
        const mapInstance = new kakao.maps.Map(mapRef.current, options);
        setMap(mapInstance);
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
