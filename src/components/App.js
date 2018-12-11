import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Tickets from "../pages/Tickets";
import Login from "../pages/Login";

class App extends Component {
  
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/tickets" exact component={Tickets}/>
      </Switch>
    );
  }
}

export default App;

