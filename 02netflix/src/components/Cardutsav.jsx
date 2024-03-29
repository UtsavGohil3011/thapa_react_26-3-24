import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink} from "react-router-dom"


function Cardutsav(props) {

  

  return (
    <>
    

    <Card className='card_hover' style={{ width: '15rem',  }}>
      <Card.Img className='img' variant="top" src={props.source} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.gener}
        </Card.Text>
        <a href={props.path} target='_utsav'>
        <Button variant="primary"> Watch {props.name}</Button>
        </a>
      </Card.Body>
    </Card>

    </>
  );
}

export default Cardutsav;