import { useState } from "react";

import MainMenu from "./components/main_menu/MainMenu";
import OnTheWay from "./components/bcn_02/OnTheWay";

function App() {
  const [currentPage, setCurrentPage] = useState("mainMenu");

  return (
    <div className="game-container">
      <div id="dialog-container"></div>
      <div className="main-container">
        <OnTheWay />
      </div>
    </div>
  );
}

export default App;
