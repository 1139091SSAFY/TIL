import ColorBox from "./copmonents/ColorBox";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    // <ColorContext.Provider value={{ color: "red" }}>
    //   <div>
    //     <ColorBox />
    //   </div>
    // </ColorContext.Provider>

    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
