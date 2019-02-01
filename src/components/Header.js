import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{paddingBottom: '10px'}}>
        <div style={{ height: '100px', backgroundColor: 'rgb(117, 195, 173)', color: 'white', fontSize: '70px', margin: 'auto', justifyContent: 'center' }}> Portfolio </div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="/resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
