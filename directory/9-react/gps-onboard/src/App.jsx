import React, { useState } from "react";
import Map from "./components/Map";
import MapSelectArea from "./components/MapSelectArea";
import Map2 from "./components/Map2";
import WatchMap from "./components/Map";

// const App = () => {
//   return (
//     <div>
//       <h1>App.jsx</h1>
//       {/* <Map />
//       <hr /> */}
//       <Map2 />
//       {/* <hr />
//       <MapSelectArea /> */}
//     </div>
//   );
// };
// export default App;

///////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import Map from "./components/Map";
// import MapSelectArea from "./components/MapSelectArea";

const App = () => {
  const [showMap, setShowMap] = useState(true);

  return (
    <div>
      <h1>App.jsx</h1>
      <button onClick={() => setShowMap(true)}>Watch Map</button>
      <button onClick={() => setShowMap(false)}>Select Area</button>
      <hr />
      {showMap ? <WatchMap /> : <MapSelectArea />}
    </div>
  );
};

export default App;
