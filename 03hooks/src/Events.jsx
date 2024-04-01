import React from 'react'
import { useState } from "react";

const Events = () => {

  const [text, setText] = useState("Click me");

  const[style, setStyle] = useState({backgroundColor:'red',height:'100vh'})




    const changes = () => {

        if(text === "Click me" ){
            setText('WOW');
            setStyle((prev)=>({
                ...prev,
                height:'50vh'
            }));
        }
        // else{
        //     setText('Click me')
        //     setStyle({backgroundColor:'red'})
        // }
    }

  return (
    <div className='mainclickme' style={style}>

    <button className='clickme' onClick={changes}>{text}</button>
      
    </div>
  )
}

export default Events
