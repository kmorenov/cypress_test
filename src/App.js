import React from "react";

import Home from './pages/Home'
import About from './pages/About'
import AllTodos from './pages/AllTodos'
// import NotFound from '/../pages/NotFound'

import {Switch, BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

const App = () => {
  return (<Router>
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todos">All Todos</Link>
    </div>
    <Switch>
      <Route exact path={'/about'} component={About}/>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/todos'} component={AllTodos}/>
      <Route exact path={'/'} component={Home}/>

    </Switch>
  </Router>)
}

export default App;
