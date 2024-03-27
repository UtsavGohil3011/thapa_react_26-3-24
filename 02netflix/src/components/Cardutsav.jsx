import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardutsav(props) {

  

  return (
    <>

    <Card style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={props.source} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.gener}
        </Card.Text>
        <Button variant="primary"> Watch {props.name}</Button>
      </Card.Body>
    </Card>

    </>
  );
}

export default Cardutsav;