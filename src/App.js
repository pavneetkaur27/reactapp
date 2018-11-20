import React, { Component } from 'react';
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Switch, Route, Link }
  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/headerComponent/mainbody';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">


            <Homepage />

          </div>

      </Router>
    );
  }
}

export default App;
