import React from "react";
import ColorPicker from "./ColorPicker";
import Board from "./Board";
import ColorPreview from "./ColorPreview";
import { colors, Painter } from "./Painter";

function App() {

  const [color, setColor] = React.useState(colors[0]);

  return (
    <div className="app">

      <Painter.Provider value={{colors, color, setColor}}>

        <div className="board">
          <Board />
        </div>

        <div className="pickPrev">
          <ColorPicker />
          <ColorPreview />
        </div>

      </Painter.Provider>

    </div>
  );
}

export default App;
