import React, { useState, useEffect } from "react";

const App = () => {
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        setLocation({
          lat: latitude,
          lng: longitude,
        })
        setLoading(false)
      },
      error => {
        console.log(error)
        setLoading(false)
      }
    )
  }, []);

  // setTimeout(() => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     setLocation({
  //       lat: pos.coords.latitude,
  //       lon: pos.coords.longitude,
  //     });
  //     console.log(location.lat, location.lon);
  //   });
  // }, 3000);

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

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Lat: {location.lat}</h1>
      <h1>Lon: {location.lng}</h1>
    </div>
  );
};

export default App;
