import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainMenu from "./components/main_menu/MainMenu";

function App() {
  const [currentPage, setCurrentPage] = useState("mainMenu");

  return (
    <div className="game-container">
      <main>{currentPage == "mainMenu" && <MainMenu />}</main>
    </div>
  );
}

export default App;
