import React, { useState, useEffect } from "react";
import Stamp from "./Stamp";
import Map from "./Map";
import WatchMap from "./WatchMap";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [time, setTime] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation({
            lat: latitude,
            lng: longitude,
          });
          setTime(Date(pos.timestamp.toLocaleString()));
          setLoading(false);
        },
        (error) => {
          console.log(error);
          setLoading(false);
          return (
            <div>
              <h1>Loading Error. Please refresh this page.</h1>
            </div>
          );
        }
      );
    } else {
      setLoading(false);
      return (
        <div>
          <h1>navigator.geolocation Error</h1>
        </div>
      );
    }
  }, []);

  const updateLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation({
        lat: latitude,
        lng: longitude,
      });
      setTime(Date(pos.timestamp.toLocaleString()));
    });
  };

  setInterval(updateLocation, 1000);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Stamp lat={location.lat} lng={location.lng} time={time} />
      <Map lat={location.lat} lng={location.lng} />
      <WatchMap lat={location.lat} lng={location.lng} />
    </div>
  );
};

export default App;
