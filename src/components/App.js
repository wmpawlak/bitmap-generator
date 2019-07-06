import React from "react";
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";
import ColorBoard from './ColorBoard';



function App() {

  return (
    <div>
      <ColorBoard />
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