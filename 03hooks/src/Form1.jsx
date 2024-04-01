import React, { useState } from 'react';

const Form1 = () => {
    const [name, setName] = useState('');
    const [myFullName, setMyFullName] = useState();

    const onClick = () => {
        setMyFullName(name);
    };

    const inputEvent = (e) => {
        setName(e.target.value);
    };

    return (
        <div className='mainForm'>
            <h1> Hello {myFullName} </h1>
            <input
                value={name}
                onChange={inputEvent}
                className='inputField'
                type='text'
                placeholder='Write your name'
            /><br />
            <button className='sub' onClick={onClick}>SUBMIT😊</button>
        </div>
    );
};

export default Form1;
