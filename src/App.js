import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import CssBaseline from 'material-ui/CssBaseline'


import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

const styles = {
    container: {
        paddingTop: 80,
    },
};

class App extends Component {
  render() {
      return <div className="App">
          <CssBaseline>
              <AppBar>
                  <Toolbar>
                      <Typography variant="title" color="inherit">
                          Relay Blogging!
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Grid container spacing={16} style={styles.container} justify="center">
                  <Grid item xs={6}>
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
                  </Grid>
              </Grid>
          </CssBaseline>
      </div>
  }
}

export default App
