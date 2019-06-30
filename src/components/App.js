import React from "react";
import ColorsPalette from "./ColorsPalette";
import Board from './Board';
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";
import DownloadButton2 from "./array";


function App() {

  return (
    <div className="app">
      <ColorsPalette />
      <Board />
      <ResetButton />
      <DownloadButton />
      <DownloadButton2 />
    </div>
  );
}

export default App;
