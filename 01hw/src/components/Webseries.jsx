import React from "react";

function Webseries() {

  const s1 = "Game of throns";

  const f1 = function () {
    const s2 = "Vikings";
    return s2;
  };

  return (
    <>
      <ol  className='sub_main'>
        <li>{s1}</li>
        <li>{f1()}</li>
      </ol>
    </>
  );
}
export default Webseries;
