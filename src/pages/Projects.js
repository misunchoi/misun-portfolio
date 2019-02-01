import React, { Component } from 'react';


class Project extends Component {
  render() {
    return (
      <div style={{margin: 'auto', padding: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth: '70vw'}}>
        <div class="card border-primary mb-3" style={{ maxWidth: "15rem", minWidth: '250px', margin: 'auto' }}>
          <div class="card-header">Gatsby, Moqui, AWS</div>
          <div class="card-body">
            <h4 class="card-title">Donation Site</h4>
            <img style={{ height: '100px', width: '100%' }} src="https://i0.wp.com/wrbbradio.org/wp-content/uploads/2016/10/grey-background-07.jpg?fit=2560%2C1544" alt="grey background" />
            <p class="card-text">Developed website using Gatsby and Moqui. Hosted using AWS S3 and EC2. Used Material-UI for styling.</p>
          </div>
        </div>

        <div class="card border-primary mb-3" style={{ maxWidth: "15rem", minWidth: '250px', margin: 'auto' }}>
          <div class="card-header">React.js, Javascript</div>
          <div class="card-body">
            <h4 class="card-title">TicTacToe</h4>
            <img style={{ height: '100px', width: '100%' }} src="https://i0.wp.com/wrbbradio.org/wp-content/uploads/2016/10/grey-background-07.jpg?fit=2560%2C1544" alt="grey background" />
            <p class="card-text">Classic TicTacToe game where players can choose their own emojis to play. Used CSS for styling.</p>
          </div>
        </div>

        <div class="card border-primary mb-3" style={{ maxWidth: "15rem", minWidth: '250px', margin: 'auto' }}>
          <div class="card-header">React.js, Ruby on Rails</div>
          <div class="card-body">
            <h4 class="card-title">Apartment App</h4>
            <img style={{ height: '100px', width: '100%' }} src="https://i0.wp.com/wrbbradio.org/wp-content/uploads/2016/10/grey-background-07.jpg?fit=2560%2C1544" alt="grey background" />
            <p class="card-text">Developed an apartment app where users can create, edit, and delete apartment information.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
