import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Navbarutsav() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbars_toggle">
      <Container fluid>
       <Navbar.Brand href="#"><span className='nav_text_netflix'>NetFlix</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-danger '  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Browse</Nav.Link> */}
            {/* modal */}
            <Button className='browse' variant="primary" onClick={handleShow}>
            Browse
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>NetFlix</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <ListGroup variant="flush">
      <ListGroup.Item><a className='genra_link' href=''>Action</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Adventure</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Comedy</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Crime and mystery</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Death game</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Fantasy</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Historical</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Horror</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Romance</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Science fiction</a></ListGroup.Item>
      <ListGroup.Item><a className='genra_link' href=''>Animation</a></ListGroup.Item>
    </ListGroup>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
            {/* modal */}
            {/* <Nav.Link href="#action2">Children</Nav.Link> */}

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarutsav;