import React, { Component } from 'react';
import './App.css';
import Table from '../Table/Table';
import NewBear from '../NewBear/NewBear';
import { connect } from 'react-redux';

class App extends Component {

  // componentDidMount() {
  //   this.props.dispatch({type: 'GET_KOALLAS'});
  // };

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

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(App);
