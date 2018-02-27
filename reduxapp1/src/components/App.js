import React, { Component } from 'react';
import {Header} from './Header';
import {Nav} from './Nav';
import {Main} from './Main';
//import {Section} from './Section';
//import {Aside} from './Aside';
import {Footer} from './Footer';

import '../css/stage.css';

class App extends Component {
  render() {
    return (
        <div id="wraper-div">
          <Header />
          <div id="stage">
            <Nav />
            <Main />
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;
