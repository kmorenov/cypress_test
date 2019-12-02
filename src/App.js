import React from "react";

import Home from './pages/Home'
import About from './pages/About'
// import NotFound from '/../pages/NotFound'

import {Switch, BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

const App = () => {
  return (<Router>
    <span><Link to="/">Home</Link> <Link to="/about">About</Link></span>
    <Switch>
      <Route exact path={'/about'} component={About}/>

      <Route exact path={'/'} component={Home}/>

    </Switch>
  </Router>)
}

export default App;
