import { useState } from "react";

import MainMenu from "./components/main_menu/MainMenu";
import OnTheWay from "./components/bcn_02/OnTheWay";

function App() {
  const [currentPage, setCurrentPage] = useState("mainMenu");

  return (
    <div className="game-container">
      <OnTheWay />
    </div>
  );
}

export default App;
