import React from 'react';
import './App.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';

import Navigation from './mainNavigation/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = () => {
  
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#29b6f6',
      },
      secondary: {
        main: '#ff5301',
      }

    }
  });

  return (
    
    <Router>
      <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Navigation />
      </div>
      
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/projects"></Route>
        <Route path="/about"></Route>
      </Switch>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
