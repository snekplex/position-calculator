import React from 'react';

import '../../scss/CalcContainer.scss';

import PositionCalculator from './PositionCalculator';

class CalcContainer extends React.Component {
  render () {
    return (
      <div className="calc-container">
        <PositionCalculator/>
      </div>
    )
  }
}

export default CalcContainer;