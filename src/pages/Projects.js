import React, { Component } from 'react';
import '../App.css';
import projects from '../content/projects'


class Project extends Component {
  render() {

    let projectsList = projects.map((option) => {
      return (
        <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem', minHeight: '270px', margin: 'auto'}}>
          <div class="card-header">
            {option.header}
          </div>
          <div class="card-body">
            <h4 class="card-title">
              {option.title}
            </h4>
            <p class="card-text">
              {option.text}
              Visit the website <a style={{ color: 'white' }} href={option.link}>here.</a>
            </p>
            <a href={option.github}><button type="button" class="btn btn-secondary">Github</button></a>
          </div>
        </div>
      )
    })

    return (
      <div style={{margin: 'auto', padding: '10px, 10px, 10px, 10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth: '100vw'}}>
        
        {projectsList}

      </div>
    );
  }
}

export default Project;
