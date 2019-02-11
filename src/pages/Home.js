import React, { Component } from 'react';
import '../App.css';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

class Home extends Component {
  render() {
    return (
      <div style={{style}} className="site-content">
        <div class="jumbotron">
          <h1 class="display-3">Hello, world!</h1>
          <p class="lead">I'm a fullstack web developer seeking to create interactive and user-friendly websites!</p>
          <hr class="my-4"/>
          <p>Explore the various projects I've been working on.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="/projects" role="button">Go to projects</a>
          </p>
        </div>

        <div>
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
