import { useRef, useEffect } from "react";

const { kakao } = window;

const useKakaoMap = (location, isLoading) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

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

  useEffect(() => {
    if (mapInstanceRef.current && markerRef.current) {
      const newPosition = new kakao.maps.LatLng(location.lat, location.lng);
      mapInstanceRef.current.setCenter(newPosition);
      markerRef.current.setPosition(newPosition);
    }
  }, [location]);

  return mapRef;
};

export default useKakaoMap;
