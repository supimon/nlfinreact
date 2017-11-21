import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const muitheme = getMuiTheme(darkBaseTheme);
    return (
      <MuiThemeProvider muiTheme={muitheme}>
          <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
          >
              <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
              <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
