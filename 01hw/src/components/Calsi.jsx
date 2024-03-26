import React from "react";

function Calsi() {
  function add(number1, number2) {
    return number1 + number2;
  }
  function sub(a, b) {
    return a - b;
  }
  function multi(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }

  let number1 = 500
  let number2 = 444

  return (
    <>
      <ul className="calsi">
      <h1>Calculator</h1>
      <li>Number 1 is : {number1}</li>
      <li>Number 2 is : {number2}</li> <br/>
        <li>The sum of two number is  :  {add(number1,number2)}</li>
        <li>The sub of two number is  :  {sub(number1,number2)}</li>
        <li>The multi of two number is  :  {multi(number1,number2)}</li>
        <li>The div of two number is  :  {div(number1,number2)}</li>
      </ul>
    </>
  );
}
export default Calsi;
