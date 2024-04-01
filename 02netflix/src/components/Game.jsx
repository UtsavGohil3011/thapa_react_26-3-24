import React from 'react';
import Slot from './Slot'; // Corrected import statement

const Game = () => {
    return (
        <div>
            <h1 className='head'> 🎰 Welcome To <span> Slot Machine </span>  Game 🎰 </h1>
            <Slot a='😊' b='😊' c='😊' />
            <Slot a='😁' b='😁' c='😁' />
            <Slot a='😊' b='😁' c='😊' />
        </div>
    );
};

export default Game;
