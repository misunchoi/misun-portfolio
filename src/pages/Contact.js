import React, { Component } from 'react';
import '../App.css';
import { FaRegEnvelope } from 'react-icons/fa'
import Grow from '@material-ui/core/Grow';



class Contact extends Component {
  render() {
    return (
      <div className="site-content">
        <Grow
          in='true'
          {...(true ? { timeout: 1000 } : {})}
        >
          <h4>Email me with any questions!</h4>
        </Grow>
          <br/>
        <Grow
          in='true'
          {...(true ? { timeout: 1000 } : {})}
        >
          <p style={{fontSize: '20px'}}><FaRegEnvelope style={{fontSize: '30px'}} /> misunchoi101@gmail.com</p>
        </Grow>
      </div>
    );
  }
}

export default Contact;
