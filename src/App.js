import './styles/App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Main from './Main';
import Rigamarole from './Rigamarole';
import Plants from './Plants'
import Secret from './Secret'
import Peace from './Peace'
import Egg from './Egg'
import Pages from './Pages'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
  
            <Route path='/about'>
              <Header active='about' /> 
              <About />
              <Footer />
            </Route>
  
            <Route path='/other'>
              <Header active='other' /> 
              <Rigamarole />
              <Footer />
            </Route>

            <Route path='/plants'>
              <Header />
              <Plants />
              <Footer />
            </Route>
  
            <Route path='/secret'>
              <Secret />
              <Footer />
            </Route>

            <Route path='/peace'>
              <Peace /> 
            </Route>

            <Route path='/eggs'>
              <Egg />
            </Route>

            <Route path='/pages'>
              <Header active='pages'/>
              <Pages />
              <Footer />
            </Route>

            <Route path='/'>
              <Header active='main' /> 
              <Main />
              <Footer />
            </Route>
  
          </Switch>
  
          
  
        </div>
      </Router>
    );
  }
}

export default App;
