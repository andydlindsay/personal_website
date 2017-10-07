import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from '../navigationBar/NavigationBar';
import About from '../about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavigationBar />
          <About />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
