import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div style={{ height: '50px', backgroundColor: 'black', color: 'white', fontSize: '20px', margin: 'auto', justifyContent: 'center' }}>
          <a style={{ fontSize: '20px', color: 'white' }} href="https://www.linkedin.com/in/mi-sun-choi/">LinkedIn</a> 
          <a style={{ fontSize: '20px', color: 'white' }} href="https://github.com/misunchoi">Github</a>
        </div>
      </div>
    );
  }
}

export default Footer;
