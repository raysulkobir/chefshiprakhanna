import React, {Fragment, useEffect, useState} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'

export default function TopNavbar() {
  const [navBar, setNavBar] = useState('top-bar-after')

   useEffect(function mount() {
      function onScroll() {
        if(window.scrollY > 100){
            setNavBar('top-bar-before')
        }else{
            setNavBar('top-bar-after')
        }
      }
      window.addEventListener("scroll", onScroll);
   }, []);

   return (
       <Fragment>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={navBar}>
             <Container>
                <Navbar.Brand href="/" className="brand-title">chefshiprakhanna</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="navbar-nav">
                   <Nav className="me-auto"> </Nav>
                   <Nav>
                      <Nav.Link href="recipes">KITCHEN</Nav.Link>
                      <Nav.Link href="books">Books</Nav.Link>
                      <Nav.Link href="restaurant">Restaurant</Nav.Link>
                      <Nav.Link href="contact">Television</Nav.Link>
                      <Nav.Link href="about">News & Events</Nav.Link>
                      <Nav.Link href="about">Calendars</Nav.Link>
                      <Nav.Link href="about">Contact Me</Nav.Link>
                      <Nav.Link href="about">About Me</Nav.Link>
                   </Nav>
                </Navbar.Collapse>
             </Container>
          </Navbar>
       </Fragment>
   );
}

