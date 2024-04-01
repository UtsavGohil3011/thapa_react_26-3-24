import React from 'react'

const Slot = (props) => {
    if (props.a === props.b && props.b === props.c) {
        return (
            <>
                <h1 style={{textAlign:'center'}}>{props.a} {props.b} {props.c}</h1>
                <h3 style={{textAlign:'center'}}>This is Matched You won the game</h3>
            </>
        );
    } else {
        return (
            <>
                <h1 style={{textAlign:'center'}}>{props.a} {props.b} {props.c}</h1>
                <h3 style={{textAlign:'center'}}>Oops, you lose</h3>
            </>
        );
    }
    return null;
};


export default Slot
