import React, { useContext } from 'react';
import { Password } from './App';


const ComD = () => {
    const newVar = useContext(Password);
  return (

    <div>
    <h1>This is compoinent D: password </h1>
    <h1>{newVar}</h1>
      
    </div>
  )
}

export default ComD
