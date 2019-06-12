import React, { Component } from 'react';
import '../App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const footer = {
  paddingTop: '20px',
  marginTop: '20px' 
}

class Footer extends Component {
  render() {
    return (
        <div style={footer}>
          <div style={{ height: '70px', backgroundColor: 'black', color: 'white', fontSize: '30px', paddingTop: '5px', paddingBottom: '20px'}}>
            <a style={{ color: 'white', paddingRight: '20px'}} href="https://www.linkedin.com/in/mi-sun-choi/"><FaLinkedin /></a> 
            <a style={{ color: 'white', paddingRight: '20px' }} href="https://github.com/misunchoi"><FaGithub /></a>
          </div>
        </div>
    );
  }
}

export default Footer;
