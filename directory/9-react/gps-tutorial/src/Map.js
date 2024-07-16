// import React, { useState, useEffect, useRef } from "react";
// import "./Map.css";

// const { kakao } = window;

// const Map = (props) => {
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [myPosition, setMyPosition] = useState({
//     lat: props.lat,
//     lng: props.lng,
//   });

//   const mapRef = useRef(null);

//   useEffect(() => {
//     // kakao 지도 API 로드 확인
//     if (!kakao.maps) return;

//     if (mapRef.current) {
//       const options = {
//         center: new kakao.maps.LatLng(myPosition.lat, myPosition.lng),
//         level: 5,
//       };
//       const mapInstance = new kakao.maps.Map(mapRef.current, options);
//       setMap(mapInstance);

//       const newMarker = new kakao.maps.Marker({
//         position: new kakao.maps.LatLng(myPosition.lat, myPosition.lng),
//       });
//       newMarker.setMap(map);
//       setMarker(newMarker);
//     }
//   }, []);

//   setTimeout(() => {
//     setMyPosition({
//       lat: props.lat,
//       lng: props.lng,
//     });

//     if (map) {
//       if (marker) {
//         marker.setMap(null);
//       }

//       const newMarker = new kakao.maps.Marker({
//         position: new kakao.maps.LatLng(myPosition.lat, myPosition.lng),
//       });
//       newMarker.setMap(map);
//       setMarker(newMarker);
//       map.setCenter(new kakao.maps.LatLng(myPosition.lat, myPosition.lng));
//     }
//   }, 3000);

//   return (
//     <div>
//       <hr />

//       <h1>Map</h1>

//       <div id="map" ref={mapRef}></div>
//     </div>
//   );
// };

// export default Map;

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
  }, []);

  useEffect(() => {
    if (map) {
      // 지도의 중심을 새로운 위치로 이동
      map.setCenter(new kakao.maps.LatLng(props.lat, props.lng));
      setMyPosition({
        lat: props.lat,
        lng: props.lng,
      });
    }
  }, [props.lat, props.lng, map]);

  return (
    <div>
      <hr />
      <h1>Map</h1>
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
