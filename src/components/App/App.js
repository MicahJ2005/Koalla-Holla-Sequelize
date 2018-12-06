import React, { Component } from 'react';
import './App.css';
import Table from '../Table/Table';
import NewBear from '../NewBear/NewBear';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Koalla Balla</h1>
        </header>
        <NewBear/>
        <Table/>
      </div>
    );
  }
}

export default App;
