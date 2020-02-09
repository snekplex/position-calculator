import React from 'react';

import '../../scss/CalcResult.scss';

class PositionCalcResult extends React.Component {
  render () {
    return (
      <div className="position-calc-result">
        <div className="result-header">
          Results
        </div>
        <div className="result-section">
          <div className="result-section-title">
            Inputs
          </div>
          <div className="result-detail">
            <label>Stock Price: </label>
            <span>${this.props.inputs.stockPrice}</span>
          </div>
          <div className="result-detail">
            <label>Stock Amount: </label>
            <span>{this.props.inputs.stockAmount}</span>
          </div>
          <div className="result-detail">
            <label>Stock Worth: </label>
            <span>${this.props.inputs.stockWorth}</span>
          </div>
          <div className="result-detail">
            <label>Stock Gain Price: </label>
            <span>${this.props.inputs.sellGainPrice}</span>
          </div>
          <div className="result-detail">
            <label>Stock Loss Price: </label>
            <span>${this.props.inputs.sellLossPrice}</span>
          </div>
          <div className="result-detail">
            <label>Stock Gain Percent: </label>
            <span>{this.props.inputs.sellGainPercent}%</span>
          </div>
          <div className="result-detail">
            <label>Stock Loss Percent: </label>
            <span>{this.props.inputs.sellLossPercent}%</span>
          </div>
        </div>
        <div className="result-section">
          <div className="result-section-title">
            Gain and Loss
          </div>
          <div className="result-detail">
            <label>Potential Gain: </label>
            <span>${this.props.inputs.potentialGain}</span>
          </div>
          <div className="result-detail">
            <label>Potential Loss: </label>
            <span>${this.props.inputs.potentialLoss}</span>
          </div>
          <div className="result-detail">
          <label>Total With Gains: </label>
          <span>${this.props.inputs.totalWithGains}</span>
        </div>
          <div className="result-detail">
            <label>Total With Loss: </label>
            <span>${this.props.inputs.totalWithLoss}</span>
          </div>
        </div>
        <div className="result-footer">
          <button className="result-close-btn" onClick={() => this.props.closeFunc()}>
            Close
          </button>
        </div>
      </div>
    )
  }
}

export default PositionCalcResult;