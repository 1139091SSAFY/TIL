import React, { useEffect } from "react";
import "../style/Map.css";
import useGeolocation from "../hooks/useGeolocation";
import useKakaoMap from "../hooks/useKakaoMap";

const WatchMap = () => {
  const { isLoading, location } = useGeolocation();
  const mapRef = useKakaoMap(location, isLoading);

  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      <h3>Lat: {location.lat} deg</h3>
      <h3>Lng: {location.lng} deg</h3>

      <div id="map" ref={mapRef} />
    </div>
  );
};

export default WatchMap;
