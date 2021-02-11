import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Main from './Main';
// import Other from './Other';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path='/about'>
            <Header active='about' /> 
            <About />
          </Route>

          {/* <Route path='/other'>
            <Header active='other' /> 
            <Other />
          </Route> */}

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

export default App;
