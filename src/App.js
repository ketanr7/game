import React from 'react';
import Home from './components/Home/index'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GameForm from './components/Form';
function App() {
  return (
       <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={GameForm} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
