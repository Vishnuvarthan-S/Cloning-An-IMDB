import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './navBar.css';
const NavigationBar = () => {
  return (
    <div className='Hole'>
    <Navbar bg="dark" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/favourite">Favourites</Nav.Link>
          <Nav.Link href="/watchlater">Watch Later</Nav.Link>
          <Nav.Link href="/admin">Admin</Nav.Link>
        </Nav>
        <div className='SearchBar'>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search a movies/show</Button>
        </Form>
        </div>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};
export default NavigationBar;