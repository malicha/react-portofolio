import React, { Component } from 'react';
import Home from './pages/Home/Home'
import './App.css';
import Kontak from './pages/kontak';
import About from './pages/about';
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/kontak" component={Kontak}/>
          <Route path="/about" component={About}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
