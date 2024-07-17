// import React from "react";
// import Map from "./components/Map";
// import MapSelectArea from "./components/MapSelectArea";

// const App = () => {
//   return (
//     <div>
//       <h1>App.jsx</h1>
//       <Map />
//       <hr />
//       <MapSelectArea />
//     </div>
//   );
// };
// export default App;

import React, { useState } from "react";
import Map from "./components/Map";
import MapSelectArea from "./components/MapSelectArea";

const App = () => {
  const [showMap, setShowMap] = useState(true);

  return (
    <div>
      <h1>App.jsx</h1>
      <button onClick={() => setShowMap(true)}>Watch Map</button>
      <button onClick={() => setShowMap(false)}>Select Area</button>
      <hr />
      {showMap ? <Map /> : <MapSelectArea />}
    </div>
  );
};

export default App;
