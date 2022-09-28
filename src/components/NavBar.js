import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function NavBar({ setSearchTitle, setSearchRate }) {
  const ratingChanged = newRating => {
    setSearchRate(newRating);
  };
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor='#ffd700'
        />
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            onChange={e => setSearchTitle(e.target.value)}
          />
          <Button variant='outline-secondary'>Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
