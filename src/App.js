import React from 'react';
import {
  Route,
  HashRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/details/:id" component={Details} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
