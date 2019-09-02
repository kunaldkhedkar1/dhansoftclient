import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header  from './components/Header';
import Login  from './components/Login';
import Details  from './components/Details';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/">
        <Header/>
        <Route path='/details' component={Details}>
        </Route>
      </Route>
      </Switch>
  </Router>
  );
}

export default App;
