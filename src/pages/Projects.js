import React, { Component } from 'react';
import '../App.css';
import { FaReact, FaRegGem } from 'react-icons/fa'
import Grow from '@material-ui/core/Grow';


class Project extends Component {
  render() {
    return (
      <div style={{margin: 'auto', padding: '10px, 10px, 10px, 10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth: '100vw'}}>
        <Grow
          in='true'
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto'}}>
            <div class="card-header">Gatsby <img style={{width: '13px', height: '13px'}} src='https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png' alt='gatsby'/>, Moqui <img style={{width: '13px', height: '13px'}} src='https://avatars3.githubusercontent.com/u/8334323?s=400&v=4' alt='moqui'/></div>
            <div class="card-body">
              <h4 class="card-title">Donation Website</h4>
              <p class="card-text">Used Material-UI, Yup, and Formik for form validation. Moqui serves as the backend for the website. Visit the website <a style={{ color: 'white' }} href="http://mkdonation.com.s3-website-us-east-1.amazonaws.com/">here.</a></p>
              <a href="https://github.com/misunchoi/my-website-gatsby"><button type="button" class="btn btn-secondary">Github</button></a>
            </div>
          </div>
        </Grow>

        <Grow
          in='true'
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1500 } : {})}
        >
          <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto', color: 'white' }}>
            <div class="card-header">React.js <FaReact/></div>
            <div class="card-body">
              <h4 class="card-title">TicTacToe</h4>
              <p class="card-text">Classic TicTacToe game where users can choose an emoji to play. Click <a style={{ color: 'white' }} href="/tictactoe">here</a> to play the game.</p><br/>
              <a href="https://github.com/misunchoi/tictactoe"><button type="button" class="btn btn-secondary">Github</button></a>
            </div>
          </div>
        </Grow>

        <Grow
          in='true'
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 2000 } : {})}
        >
          <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto'}}>
            <div class="card-header">Ruby on Rails <FaRegGem/>, React.js <FaReact/></div>
            <div class="card-body">
              <h4 class="card-title">Apartment App</h4>
              <p class="card-text">Logged in users can create, edit, and delete apartment information.</p><br/><br/>
              <a href="https://github.com/misunchoi?utf8=%E2%9C%93&tab=repositories&q=apartment&type=&language="><button type="button" class="btn btn-secondary">Github</button></a>
            </div>
          </div>
        </Grow>

        <Grow
          in='true'
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 2500 } : {})}
        >
          <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto'}}>
            <div class="card-header"> React.js <FaReact/></div>
            <div class="card-body">
              <h4 class="card-title">Portfolio Website</h4>
              <p class="card-text">Developed a portfolio website using React.js and Bootstrap.</p><br/><br/>
              <a href="https://github.com/misunchoi/misun-portfolio"><button type="button" class="btn btn-secondary">Github</button></a>
            </div>
          </div>
        </Grow>


        <Grow
          in='true'
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 2500 } : {})}
        >
          <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', margin: 'auto'}}>
            <div class="card-header"> Gatsby <img style={{width: '13px', height: '13px'}} src='https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png' alt='gatsby'/>, Moqui <img style={{width: '13px', height: '13px'}} src='https://avatars3.githubusercontent.com/u/8334323?s=400&v=4' alt='moqui'/></div>
            <div class="card-body">
              <h4 class="card-title">GND Website</h4>
              <p class="card-text">Created the layout, header, footer, and Start Serving page. Implemented AWS Simple Email Service (SES). Visit the website <a style={{ color: 'white' }} href="http://gnd-website.s3-website-us-east-1.amazonaws.com/startserving/">here.</a></p>
              <a href="https://github.com/tfe-gnd-project/GND-website"><button type="button" class="btn btn-secondary">Github</button></a>
            </div>
          </div>
        </Grow>

        

        

      </div>
    );
  }
}

export default Project;
