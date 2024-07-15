import React, { useState, useEffect } from "react";

const App = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // (pos) => {
      //   setLocation({
      //     lat: pos.coords.latitude,
      //     lon: pos.coords.longitude,
      //   });
      // },
      (pos) => {
        const { lat, lon } = pos.coords;
        setLocation({
          lat,
          lon,
        });
      },
      (error) => console.log(error);
    );
  }, []);

  setTimeout(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
      console.log(location.lat, location.lon);
    });
  }, 3000);

  // navigator.geolocation.watchPosition(
  //   (pos) => {
  //     setLocation({
  //       lat: pos.coords.latitude,
  //       lon: pos.coords.longitude,
  //     });
  //   },
  //   (error) => console.log(error),
  //   { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
  // );

  return (
    <div>
      <h1>Lat: {location.lat}</h1>
      <h1>Lon: {location.lon}</h1>
    </div>
  );
};

export default App;
