import React from "react";
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";
import ColoredBoard from './ColoredBoard';



function App() {

  return (
    <div>
      <ColoredBoard />
      <div className="brd">
        <div className="ui basic segment">
          <div >
            <div className="ui raised segment">
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