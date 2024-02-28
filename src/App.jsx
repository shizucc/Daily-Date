import { useCallback, useEffect, useState } from "react";

import OnTheWay from "./components/bcn_02/OnTheWay";
import Gramedia from "./components/bcn_03a/Gramedia";
import Timezone from "./components/bcn_04a/Timezone";

function App() {
  const [currentPage, setCurrentPage] = useState("bcn_04a");
  const [isPageDimmed, setIsPageDimmed] = useState(false);

  function fadeIn() {
    const body = document.getElementById("body");
    body.className = "fade-in";
  }

  function fadeOut() {
    const body = document.getElementById("body");
    body.className = "fade-out";
  }

  useEffect(() => {
    if (isPageDimmed) {
      fadeOut();
    } else {
      fadeIn();
    }
  }, [isPageDimmed]);

  const handleNextPage = useCallback(function handleNextPage(page) {
    const timerDimmed = setTimeout(() => {
      setIsPageDimmed(true);
    }, 1000);

    const timerChangePage = setTimeout(() => {
      setCurrentPage(page);
      setIsPageDimmed(false);
    }, 2000);

    return () => {
      clearTimeout(timerDimmed);
      clearTimeout(timerChangePage);
    };
  }, []);

  return (
    <>
      {currentPage === "bcn_02" && <OnTheWay toNextPage={handleNextPage} />}
      {currentPage === "bcn_03a" && <Gramedia toNextPage={handleNextPage} />}
      {currentPage === "bcn_04a" && <Timezone toNextPage={handleNextPage} />}
    </>
  );
}

export default App;
