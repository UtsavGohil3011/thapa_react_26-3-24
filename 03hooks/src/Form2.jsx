// import React from 'react'
import React, { useState } from "react";

const Form2 = () => {
  const [fullName, setFullName] = useState("");
  const [name, setname] = useState();

  const subText = () => {
    setFullName(name);
  };
  const inputEvent = (e) => {
    setname(e.target.value);
  };

  return (
    <div className="mainForm">
      <h1>Hello {fullName}</h1>
      <input
        value={name}
        type="text"
        onChange={inputEvent}
        placeholder="Write your name"
        className="inputField"
      />
      <br />
      <button className="sub" onClick={subText}>
        SUBMIT😊
      </button>
    </div>
  );
};

export default Form2;
