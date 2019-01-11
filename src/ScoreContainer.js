import React from 'react';
import Score from './Score';

class ScoreContainer extends React.Component {
  render() {
    return (
      <div className="score-container">
        <h2>Score Container</h2>
        <Score />
      </div>
    );
  }
}

export default ScoreContainer;
