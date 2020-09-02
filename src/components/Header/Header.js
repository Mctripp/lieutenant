import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import navImg from '../../LTNT_Logo_Mythic_Icon.svg'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#games">Games</Nav.Link>
    <Nav.Link href="#players">Players</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
    <Nav.Link href='#/about'>About</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="header" variant="dark" expand="md">
    <Navbar.Brand href="#/">
      <img src={navImg} width='45' height='45'/>
       Lieutenant
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
