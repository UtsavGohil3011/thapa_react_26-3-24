import React from "react";
import { useState } from "react";

const Events2 = () => {
  const [bg, setbg] = useState("First click everse");
  const [style, setStyle] = useState({backgroundColor: "purple",height: "100vh",});
  

  const changbg = () => {
    if (bg === "First click everse") {
      setbg("First Click");
      setStyle({ backgroundColor: "green", height: "10vh" });
    } else {
      setbg("First click everse");
      setStyle({ backgroundColor: "green", height: "10vh" });
    }
  };
  const doubleBg = () => {
    setbg("Double click");
    setStyle({ backgroundColor: "green", height: "100vh" });
  };
  return (
    <div className="mainclickme2" style={style}>
      <button className="clickme2" onClick={changbg} onDoubleClick={doubleBg}>
        {bg}
      </button>
    </div>
  );
};

export default Events2;
