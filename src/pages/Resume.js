import React, { Component } from 'react';
import '../App.css';
import Grow from '@material-ui/core/Grow';

class Resume extends Component {
  render() {
    return (
      <div style={{ maxWidth: '70vw', margin: 'auto' }}>
        <Grow
          in='true'
          {...(true ? { timeout: 1000 } : {})}
        >
          <h2>Experience</h2>
        </Grow>
        <Grow
          in='true'
          {...(true ? { timeout: 2000 } : {})}
        >
          <div style={{ backgroundColor: '#f2f2f2' }}>
            <h5>MK Decision - <i>Fullstack Web Development Intern</i></h5>
            <p>Developed a donation website using Moqui (Java-based), Gatsby (React-based) and Stripe API for secure payment transaction. Implemented Scrum project management to build the website in a organized and efficient manner.</p>

            <h5>LEARN Academy - <i>Fullstack Web Development</i></h5>
            <p>LEARN academy is a full-stack web development program that covers mainly Javascript, Ruby on Rails, and React.js  to create interactive  websites. Spent at least 580 hours of coding throughout the program, mostly done through pair programming.</p>

            <h5>UCSD Geisel Library - <i>Book Repair Unit Assistant</i></h5>
            <p>Inspected books in detail to apply specific repairing techniques according to the condition of the books. Organized/updated condition of repaired books to library catalog system.</p>
          </div>
        </Grow>

        <Grow
          in='true'
          {...(true ? { timeout: 2500 } : {})}
        >
          <h2>Education</h2>
        </Grow>
        <Grow
          in='true'
          {...(true ? { timeout: 2500 } : {})}
        >
          <div style={{ backgroundColor: '#f2f2f2' }}>
            <h5>University of California, San Diego - <i>Bachelor of Biological Sciences</i></h5>
            <p>General Biology</p>
          </div>
        </Grow>
        <Grow
          in='true'
          {...(true ? { timeout: 2500 } : {})}
        >
          <h2>Technical Skills</h2>
        </Grow>
        <Grow
          in='true'
          {...(true ? { timeout: 2500 } : {})}
        >
          <div style={{ backgroundColor: '#f2f2f2' }}>
            <h5>Languages</h5>
            <p>JavaScript, HTML, CSS, SQL, Ruby</p>
            <p>Korean - Fluent</p>

            <h5>Framework/Libraries</h5>
            <p>Ruby on Rails, Bootstrap, React, Gatsby, Moqui</p>

            <h5>Development</h5>
            <p>BDD/TDD, Pair programming</p>

            <h5>Testing</h5>
            <p>RSpec</p>

            <h5>Database</h5>
            <p>PostgreSQL</p>

            <h5>Tools</h5>
            <p>GitHub, AWS</p>
          </div>
          </Grow>
      </div>
    );
  }
}

export default Resume;
