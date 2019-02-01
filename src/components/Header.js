import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';



class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/projects">Project</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Header;
