import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from '../navigationBar/NavigationBar';
import About from '../about/About';
import FeaturedProjects from '../featuredProjects/FeaturedProjects';
import ContactForm from '../contactForm/ContactForm';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavigationBar />
          <About />
          <FeaturedProjects />
          <ContactForm />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
