import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" style={{paddingTop: '20px', marginTop: '20px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '50px', backgroundColor: 'black', color: 'white', fontSize: '20px' }}>
        <div style={{ height: '50px', backgroundColor: 'black', color: 'white', fontSize: '20px' }}>
          <a style={{ color: 'white', paddingRight: '20px' }} href="https://www.linkedin.com/in/mi-sun-choi/">LinkedIn</a> <s></s>
          <a style={{ color: 'white', paddingRight: '20px'  }} href="https://github.com/misunchoi">Github</a>
        </div>
      </div>
    );
  }
}

export default Footer;
