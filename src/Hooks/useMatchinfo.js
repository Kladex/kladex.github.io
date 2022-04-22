import { useState } from "react";
import resumeDatas from "../data/resumeData";

function useMatchInfo() {
  const [showInfo, setShowInfo] = useState([]);

  function clicked(dataId) {
    const dataIndex = resumeDatas.findIndex((data) => data.id === dataId);
    let temp = resumeDatas[dataIndex];

    setShowInfo(temp);
  }
  return { showInfo, clicked };
}

export default useMatchInfo;
