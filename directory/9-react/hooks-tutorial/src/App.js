// import React, { useState } from "react";
// import Counter from "./components/Counter";
// import Info from "./components/Info";

// const App = () => {
//   // return <Counter />;

//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////////

import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return <Counter />;
};

export default App;
