import React, { Component } from 'react';
import MapContainer from './MapContainer';
import ScoreContainer from './ScoreContainer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <MapContainer />
        <ScoreContainer />
      </div>
    );
  }
}

export default App;
