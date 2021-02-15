import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Main from './Main';
import Rigamarole from './Rigamarole';
import Secret from './Secret'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
  
            <Route path='/about'>
              <Header active='about' /> 
              <About />
            </Route>
  
            <Route path='/other'>
              <Header active='other' /> 
              <Rigamarole />
            </Route>
  
            <Route path='/secret'>
              <Secret />
            </Route>

            <Route path='/'>
              <Header active='main' /> 
              <Main />
            </Route>
  
          </Switch>
  
          <Footer />
  
        </div>
      </Router>
    );
  }
}

export default App;
