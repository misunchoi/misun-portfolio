import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{paddingBottom: '10px'}}>
        <div style={{ height: '100px', backgroundColor: 'black', color: 'white', fontSize: '50px', margin: 'auto', justifyContent: 'center' }}> 
          Mi Sun Choi <br/>
          <a style={{ fontSize: '10px', color: 'white' }} href="www.linkedin.com/in/mi-sun-choi">LinkedIn</a>
        </div>
        <div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="/resume">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
