import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <div className="score-box">
        <p>Your travel score is 1325</p>
        <p>Not bad!</p>
        <h3>Details</h3>
        Number of continents: 3 <br />
        Number of countries: 18 <br />
        Total square milage: 94,294 <br />
      </div>
    );
  }
}

export default Score;
