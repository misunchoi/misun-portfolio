import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/projects" exact component={Projects} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
