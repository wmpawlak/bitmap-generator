import React from "react";
import ColorsPalette from "./ColorsPalette";
import Board from './Board';
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";



function App() {

  return (
    <div>
      
      <div className="brd">
        <div className="ui raised segment">
          <Board />
        </div>
        <div className="ui basic segment">
          <ColorsPalette />
        </div>
      </div>
      
      <div className="brd">
        <div className="ui basic segment">
          <div >
            <div className="ui raised  segment">
              <DownloadButton />  
              <ResetButton />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;