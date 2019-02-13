import React, { Component } from 'react';


class Header extends Component {
  state = {
    toggle: 'collapse navbar-collapse'
  }

  handleToggle = () => {
    if (this.state.toggle === 'collapse navbar-collapse') {
      this.setState({
        toggle: 'collapse navbar-collapse show'
      })
    } else if (this.state.toggle === 'collapse navbar-collapse show') {
      this.setState({
        toggle: 'collapse navbar-collapse'
      })
    }
  }

  render() {
    return (
      <div className="Header" style={{ marginBottom: '30px' }}>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="/">Mi Sun Choi</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation" onClick={this.handleToggle}>
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class={this.state.toggle} id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/resume">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          
        </nav>
      </div>
    );
  }
}

export default Header;
