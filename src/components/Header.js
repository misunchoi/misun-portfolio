import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{paddingBottom: '10px'}}>
        <div style={{ height: '80px', backgroundColor: 'black', color: 'white', fontSize: '20px', margin: 'auto', justifyContent: 'center' }}> 
          misunchoi101@gmail.com<br/>
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
