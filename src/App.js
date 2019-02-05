import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import TicTacToe from './pages/TicTacToe';


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
            <Route path="/tictactoe" exact component={TicTacToe} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
