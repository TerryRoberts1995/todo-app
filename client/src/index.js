import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return <div>Hello World!</div>
  }


}





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Entry Point
);
