import React, { Component } from 'react';

import './App.css';
import { Header } from './Header';
import {Home} from './Home';
import {About} from './About';

class App extends Component {
  constructor(){
    super();
    this.state={
      homeLink:"Continut Home din parent"
    };
  }
  onChangeLinkName(newName){
    
    this.setState({
      homeLink:newName
      })
  }
  render() {
    return (
      <div className="container">
      <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              <Header/>
          </div>
      </div>
      <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              <Home homeLink={this.state.homeLink} changeLink={this.onChangeLinkName.bind(this)}/>
          </div>
     
          <div className="col-xs-10 col-xs-offset-1">
              <About />
          </div>
      </div>
  </div>
    );
  }
}

export default App;
