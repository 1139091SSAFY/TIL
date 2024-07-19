import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({
      lat: latitude,
      lng: longitude,
    });
    setIsLoading(false);
  };

  const failure = (error) => {
    console.log(error);
    setIsLoading(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, failure);

    const watchId = navigator.geolocation.watchPosition(success, failure, {
      enableHighAccuracy: true,
      maximumAge: 10000,
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { isLoading, location };
};

export default useGeolocation;
