import React, { Component } from 'react';
import '../App.css';
import { FaRegEnvelope } from 'react-icons/fa'


class Contact extends Component {
  render() {
    return (
      <div className="site-content">
        <h4>Email me with any questions!</h4>
        <br/>
        <FaRegEnvelope style={{fontSize: '30px'}} />
        <p style={{fontSize: '20px'}}>misunchoi101@gmail.com</p>
      </div>
    );
  }
}

export default Contact;
