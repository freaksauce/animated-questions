import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuestionScroller from './QuestionScroller'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

class App extends Component {
  state = {
    questionsArray: [Component1, Component2, Component3]
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          <QuestionScroller questions={this.state.questionsArray} />
        </div>
      </div>
    );
  }
}

export default App;
