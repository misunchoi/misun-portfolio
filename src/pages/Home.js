import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-3">Hello, world!</h1>
          <p class="lead">I'm a front-end web developer seeking to create interactive and user-friendly websites!</p>
          <hr class="my-4"/>
          <p>Explore the projects that I've been part of.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="/projects" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
