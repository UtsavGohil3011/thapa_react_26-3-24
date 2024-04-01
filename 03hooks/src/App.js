import "./App.css";
import { useState } from "react";
import Events from "./Events";
import Events2 from "./Events2";
import Events3 from "./Events3";
import Form1 from "./Form1";
import Todo from "./Todo";
import Todo1 from "./Todo1";
import Materialui from "./Materialui";
import Formdesign from "./Formdesign";
import NewTodo from "./NewTodo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [num, setNum] = useState(0);
  const [time, settime] = useState(new Date().toLocaleTimeString());
  const [time2, settime2] = useState(new Date().toLocaleTimeString());

  const AddValue = () => {
    // setNumber('Hello, 😁')
    setNumber(number + 1);
    // console.log(number++);
  };
  const DecValue = () => {
    // setNumber('Hello, 😁')
    setNumber2(number2 - 1);
    // console.log(number++);
  };

  const Minvalue = () => {
    setNum(num - 1);
  };

  const Maxvalue = () => {
    setNum(num + 1);
  };

  const refTime = () => {
    settime(new Date().toLocaleTimeString());
  };

  setInterval(() => {
    settime2(new Date().toLocaleTimeString());    
  }, 1000);

  return (
    <>
      <div className="main">
        <h1 className="head">{number}</h1>
        <button className="btn" onClick={AddValue}>
          Click Me to ADD the Value
        </button>
      </div>

      <div className="main">
        <h1 className="head">{number2}</h1>
        <button className="btn" onClick={DecValue}>
          Click Me to Decrease the Value
        </button>
      </div>

      <div className="main2">
        <button onClick={Minvalue} className="btn2">
          -
        </button>
        <span>{num}</span>
        <button onClick={Maxvalue} className="btn2">
          +
        </button>
      </div>

      <div className="main3">
        <h1>{time}</h1>
        <button className="btn3" onClick={refTime}>
          Click To SEE Latest Time
        </button>
      </div>

       <div className="main3">
        <button className="btn3">{time2}</button>
      </div> 

      <Events />
      <Events2 />
      <Events3 />
      <Form1 />
      <Todo />
      <Todo1 />
      <Materialui /><br /><br /><br /><br />
      <Formdesign /><br /><br /><br /><br />
      <NewTodo /><br /><br /><br /><br />
      </>
  );
}

export default App;
