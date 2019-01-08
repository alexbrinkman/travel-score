import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import ScoreContainer from './ScoreContainer';

class App extends Component {
  render() {
    return (
      <div className="App map-container">
        <MapContainer />
        <ScoreContainer />
      </div>
    );
  }
}

export default App;
