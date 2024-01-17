import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function HomeNavBar() {
  return (
    <>
 
    <br />
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/meteo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
         EpiWeathers
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Province</Nav.Link>
            
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Inserisci Città"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Cerca</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
    
    
  </>
  )
}
