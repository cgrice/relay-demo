import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

class App extends Component {
  render() {
      return <div className="App">
          <header className="App-header">
              <h1 className="App-title">Relay Blogging!</h1>
          </header>
          <Router>
              <Switch>
                  <Route
                      path={"/post/:id"}
                      component={PostDetail}
                  />
                  <Route
                      path={"/"}
                      exact
                      component={Home}
                  />
              </Switch>
          </Router>
      </div>
  }
}

export default App
