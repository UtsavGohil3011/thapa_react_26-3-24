// ComC.js
import React from 'react';
import { FirstNameContext } from './App';

// This is context api And this is not useful instead use "useContext" 

const ComC = () => {
  return (
    <FirstNameContext.Consumer>
      {value => (
        <div>
          <h2>Component C</h2>
          <h3>Hello, {value}!</h3>
        </div>
      )}
    </FirstNameContext.Consumer>
  );
};

export default ComC;
    