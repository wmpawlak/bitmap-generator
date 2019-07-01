import React from "react";
import ColorsPalette from "./ColorsPalette";
import Board from './Board';
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";



function App() {

  return (
    <div className="app">
      <ColorsPalette />
      <Board />
      <ResetButton />
      <DownloadButton />
    </div>
  );
}

export default App;
