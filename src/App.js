// import logo from './logo.svg';
import './App.css';
// import Button from '@mui/material/Button';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import 'tachyons';
// import Loader from './components/Loader';

class App extends Component {

  c = "sanket";

  render() {
    return (
      <>
        <Navbar />
        <News />
        {/* <Loader /> */}
      </>
    );
  }
}

export default App;
