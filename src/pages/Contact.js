import React, { Component } from 'react';
import '../App.css';


class Contact extends Component {
  render() {
    return (
      <div className="site-content">
        <h4>Email me with any questions!</h4>
        <br/>
        <img src="https://imageog.flaticon.com/icons/png/512/281/281769.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" style={{maxwidth: '100px', maxHeight: '50px'}} />
        <div style={{fontSize: '20px'}}>misunchoi101@gmail.com</div>
      </div>
    );
  }
}

export default Contact;
