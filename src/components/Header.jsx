import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{marginLeft:'auto',marginRight:'auto'}} href="/" className='fs-5 fw-bold align-items-center justify-content-center'><FontAwesomeIcon icon='fa-solid fa-check-square'/><i class="fa-solid fa-video"></i> MOVIE MANIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav" className='ms-5 navs'>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {/* <Nav.Link href="/about">About Us</Nav.Link> */}
            {/* <Nav.Link href="/trailer">Trailers</Nav.Link>
            <Nav.Link href="/music">Songs</Nav.Link>
            <Nav.Link href="/review">Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
