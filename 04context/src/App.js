// App.js
import React, { createContext } from 'react';
import './App.css';
import ComA from './ComA';
import ComB from './ComB';
import ComD from './ComD';
import { useState } from 'react';

// Create the context
export const FirstNameContext = createContext();
export const Password = createContext();
export const Email = createContext();

function App() {
  const [num, setNum] = useState('Gohil')
  return (
    <>
    <Email.Provider value={{num,setNum}}>
    <FirstNameContext.Provider value={'Utsav'}>
      <ComA />
      <ComB />
    </FirstNameContext.Provider>
    </Email.Provider>

    <Password.Provider value={'Utsav@3011'}> <ComD /> </Password.Provider>
    </>
  );
}

export default App;
