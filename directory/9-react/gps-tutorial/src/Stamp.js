import React from "react";

const Stamp = (props) => {
  return (
    <div>
      <h1>Time: {props.time}</h1>
      <h1>Lat: {props.lat}º</h1>
      <h1>Lng: {props.lng}º</h1>
    </div>
  );
};

export default Stamp;
