// ComB.js
import React, { useContext } from 'react';
import { Email, FirstNameContext } from './App';

// this is useContext this is useful method ...

const ComB = () => {
    const fname = useContext(FirstNameContext)
   const {num,setNum }= useContext(Email)
  return (
    <div>
      <h2>Component B {fname}</h2>
      <h2 onClick={()=>{num==='Gohil'?setNum('utsav'):setNum('Gohil')}}>name : {num}</h2>
    </div>
  );
};

export default ComB;
