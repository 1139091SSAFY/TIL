import { useEffect, useRef } from "react";

const { kakao } = window;

const Marker = ({ map, location }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (map && location) {
      // 기존 마커가 있으면 제거
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }

      // 새로운 마커 생성 및 설정
      const newMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(location.lat, location.lng),
      });
      newMarker.setMap(map);

      // markerRef에 새로운 마커 저장
      markerRef.current = newMarker;
    }
  }, [map, location]);

  return null;
};

export default Marker;
