import React from 'react';

import '../../scss/ResultContainer.scss';

import PositionCalcResult from './PositionCalcResult';

class ResultContainer extends React.Component {
  render () {
    return (
      <div className="calc-result-container">
        <PositionCalcResult/>
      </div>
    )
  }
}

export default ResultContainer;