import { useCallback, useEffect, useState } from "react";

import OnTheWay from "./components/bcn_02/OnTheWay";
import Gramedia from "./components/bcn_03a/Gramedia";
import Timezone from "./components/bcn_04a/Timezone";
import OnTheWayDay from "./components/bcn_03b/OnTheWayDay";
import Seblak from "./components/bcn_04b/Seblak";
import Dinner from "./components/bcn_05b/Dinner";
import OnTheWayAfternoon from "./components/bcn_03c/OnTheWayAfternoon";
import FeedFish from "./components/bcn_04c/FeedFish";
import Garden from "./components/bcn_05c/Garden";
import OnTheWayNight from "./components/bcn_06/OnTheWayNight";
import HomeNight from "./components/bcn_07/HomeNight";
import HomeMorning from "./components/bcn_01/HomeMorning";

function App() {
  const [currentPage, setCurrentPage] = useState("bcn_01");
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
      {currentPage === "bcn_01" && <HomeMorning toNextPage={handleNextPage} />}
      {currentPage === "bcn_02" && <OnTheWay toNextPage={handleNextPage} />}
      {currentPage === "bcn_03a" && <Gramedia toNextPage={handleNextPage} />}
      {currentPage === "bcn_04a" && <Timezone toNextPage={handleNextPage} />}
      {currentPage === "bcn_03b" && <OnTheWayDay toNextPage={handleNextPage} />}
      {currentPage === "bcn_04b" && <Seblak toNextPage={handleNextPage} />}
      {currentPage === "bcn_05b" && <Dinner toNextPage={handleNextPage} />}
      {currentPage === "bcn_03c" && (
        <OnTheWayAfternoon toNextPage={handleNextPage} />
      )}
      {currentPage === "bcn_04c" && <FeedFish toNextPage={handleNextPage} />}
      {currentPage === "bcn_05c" && <Garden toNextPage={handleNextPage} />}
      {currentPage === "bcn_06" && (
        <OnTheWayNight toNextPage={handleNextPage} />
      )}
      {currentPage === "bcn_07" && <HomeNight toNextPage={handleNextPage} />}
    </>
  );
}

export default App;
