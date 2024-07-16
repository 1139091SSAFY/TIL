import React, { useEffect, useRef } from "react";

const { kakao } = window;

const Marker = ({ map, position }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (map && position) {
      // 기존 마커가 있으면 제거
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }

      // 새로운 마커 생성 및 설정
      const newMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(position.lat, position.lng),
      });
      newMarker.setMap(map);

      // markerRef에 새로운 마커 저장
      markerRef.current = newMarker;
    }
  }, [map, position]);

  return null;
};

export default Marker;
