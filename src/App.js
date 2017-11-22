import React, { Component } from 'react';
import Root from './Root/Root';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <Root />
        </MuiThemeProvider>
    );
  }
}

export default App;
