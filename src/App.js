import React, { Component } from 'react';
import Router from './Router/Router';
import Header from './Layout/Header/Header';
import Footer from "./Layout/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
          <Router/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
