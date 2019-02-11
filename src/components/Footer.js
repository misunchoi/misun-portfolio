import React, { Component } from 'react';
import '../App.css';

const footer = {
  paddingTop: '20px',
  marginTop: '20px' 
}

class Footer extends Component {
  render() {
    return (
        <div style={footer}>
          <div style={{ height: '70px', backgroundColor: 'black', color: 'white', fontSize: '20px', paddingTop: '20px', paddingBottom: '20px'}}>
            <a style={{ color: 'white', paddingRight: '20px' }} href="https://www.linkedin.com/in/mi-sun-choi/">LinkedIn</a> <s></s>
            <a style={{ color: 'white', paddingRight: '20px'  }} href="https://github.com/misunchoi">Github</a>
          </div>
        </div>
    );
  }
}

export default Footer;
