import React from 'react';

import '../../scss/PositionCalculator.scss';

class PositionCalculator extends React.Component {
  render () {
    return (
      <div className="position-calc">
        <div className="position-calc-header">
          Position Calculator
        </div>
        <div className="position-calc-body">
          <form className="position-calc-form">
            Price of stock <br/>
            <input className="calc-txt-input" type="text" name="stockPrice"/>
            Amount of stock <br/>
            <input className="calc-txt-input" type="text" name="stockAmount"/>
            Sell gain price <br/>
            <input className="calc-txt-input" type="text" name="sellGainPrice"/>
            Sell loss price <br/>
            <input className="calc-txt-input" type="text" name="sellLossPrice"/>
            Sell gain percent <br/>
            <input className="calc-txt-input" type="text" name="sellGainPercent"/>
            Sell loss percent <br/>
            <input className="calc-txt-input" type="text" name="sellLossPercent"/>
          </form>
        </div>
        <div className="position-calc-footer">
          <button className="calc-submit-btn">Calculate</button>
        </div>
      </div>
    )
  }
}

export default PositionCalculator;