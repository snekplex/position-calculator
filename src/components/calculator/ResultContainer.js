import React from 'react';

import '../../scss/ResultContainer.scss';

import PositionCalcResult from './PositionCalcResult';

class ResultContainer extends React.Component {

  render () {
    return (
      <div className={`calc-result-container ${this.props.visible ? '' : 'closed'}`}>
        <PositionCalcResult
          closeFunc={this.props.closeFunc}
          inputs={this.props.inputs}
        />
      </div>
    )
  }
}

export default ResultContainer;