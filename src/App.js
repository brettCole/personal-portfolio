import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'typeface-montserrat/index.css';
import 'typeface-norwester/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './container/Homepage';
import AboutPage from './container/AboutPage';
import BlogPage from './container/BlogPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/blog' component={BlogPage} />
        </div>
      </Router>
    );
  }
}

export default App;
