import React, { Component } from 'react';
import '../App.css';
import Grow from '@material-ui/core/Grow';


const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

const icons = {
  maxHeight: '25px',
  margin: '5px'
}

class Home extends Component {
  render() {
    return (
      <div style={{style}} className="site-content">
      <Grow
        in='true'
        {...(true ? { timeout: 1000 } : {})}
        >
        <div class="jumbotron">
          <h1 class="display-3">Hello, world!</h1>
          <p class="lead">I'm a fullstack web developer seeking to create interactive and user-friendly websites!</p>
          <hr class="my-4"/>
          <p>Explore the various projects I've been working on using <br/><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react.js icon" style={icons} />
            <img src="https://png.pngtree.com/svg/20170719/javascript_633988.png" alt="react.js icon" style={icons} /> 
            <img src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png" alt="react.js icon" style={icons} /> 
            <img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png" alt="react.js icon" style={icons} /> 
            <img src="https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png" alt="react.js icon" style={icons} />
            <img src="https://avatars3.githubusercontent.com/u/8334323?s=400&v=4" alt="react.js icon" style={icons} /> 
            <img src="http://www.anarsolutions.com/wp-content/uploads/2018/02/bootstrap.png" alt="react.js icon" style={icons} /> 
            <img src="https://papercallio-production.s3.amazonaws.com/uploads/event/logo/751/mid_300_logo_900x900_transparent_bkg.png" alt="react.js icon" style={icons} /> 
            <img src="https://www.iqonlinetraining.com/wp-content/uploads/2018/02/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png" alt="react.js icon" style={icons} /> <br/>and more!</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="/projects" role="button">Go to projects</a>
          </p>
        </div>
      </Grow>
      </div>
    );
  }
}

export default Home;
