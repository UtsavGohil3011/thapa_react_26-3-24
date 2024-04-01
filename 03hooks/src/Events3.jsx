import React from "react";
import { useState } from "react";

const Events3 = () => {

    const color = 'aqua'

  const [bg, setbg] = useState(color);
  const [name, setName] = useState(' This is Aqua Color');


    const bgChange = () => {

        if (name === 'This is #34495e color') {
            
        let changedColor = 'aqua'
        setbg(changedColor)
        setName('This is aqua color')
            
        }
        else{

            let changedColor = '#34495e'
            setbg(changedColor)
            setName('This is #34495e color')

        }
    }

  return (
    <div style={{backgroundColor: bg}} className="mainur">
      <button className="btnur" onClick={bgChange}>
        {name}
      </button>
    </div>
  );
};

export default Events3;
