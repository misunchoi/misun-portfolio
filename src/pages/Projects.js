import React, { Component } from 'react';


class Project extends Component {
  render() {
    return (
      <div style={{margin: 'auto', padding: '10px, 10px, 10px, 10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth: '90vw'}}>

        <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto'}}>
          <div class="card-header">Gatsby, Moqui</div>
          <div class="card-body">
            <h4 class="card-title">Donation Website</h4>
            <p class="card-text">Used Material-UI, Yup, and Formik for form validation. Moqui serves as the backend for the website. Visit the website <a style={{ color: 'white' }} href="http://mkdonation.com.s3-website-us-east-1.amazonaws.com/">here.</a></p>
            <a href="https://github.com/misunchoi/my-website-gatsby"><button type="button" class="btn btn-secondary">Github</button></a>
          </div>
        </div>

        <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto', color: 'white' }}>
          <div class="card-header">React.js</div>
          <div class="card-body">
            <h4 class="card-title">TicTacToe</h4>
            <p class="card-text">Classic TicTacToe game where users can choose an emoji to play. Click <a style={{ color: 'white' }} href="/tictactoe">here</a> to play the game.</p><br/>
            <a href="https://github.com/misunchoi/tictactoe"><button type="button" class="btn btn-secondary">Github</button></a>
          </div>
        </div>

        <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto'}}>
          <div class="card-header">Ruby on Rails, React.js</div>
          <div class="card-body">
            <h4 class="card-title">Apartment App</h4>
            <p class="card-text">Logged in users can create, edit, and delete apartment information.</p><br/><br/>
            <a href="https://github.com/misunchoi?utf8=%E2%9C%93&tab=repositories&q=apartment&type=&language="><button type="button" class="btn btn-secondary">Github</button></a>
          </div>
        </div>

        <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto'}}>
          <div class="card-header"> React.js</div>
          <div class="card-body">
            <h4 class="card-title">Portfolio Website</h4>
            <p class="card-text">Developed a portfolio website using React.js and Bootstrap.</p><br/><br/>
            <a href="https://github.com/misunchoi/misun-portfolio"><button type="button" class="btn btn-secondary">Github</button></a>
          </div>
        </div>

        

      </div>
    );
  }
}

export default Project;
