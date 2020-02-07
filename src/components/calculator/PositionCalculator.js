import React from 'react';

import '../../scss/PositionCalculator.scss';

class PositionCalculator extends React.Component {
  state = {
    stockPrice: '',
    stockAmount: '',
    sellGainPrice: '',
    sellLossPrice: '',
    sellGainPercent: '',
    sellLossPercent: ''
  }

  setStockPrice(price) {
    this.setState({ stockPrice: price });
  }

  setStockAmount(amount) {
    this.setState({ stockAmount: amount });
  } 

  setSellGainPrice(sellGainPrice) {
    if (this.state.stockPrice) {
      const sellGainFloat = parseFloat(sellGainPrice);
      const stockPrice = parseFloat(this.state.stockPrice);
      const increase = sellGainFloat - stockPrice;
      const percentIncrease = parseFloat((increase / stockPrice) * 100).toFixed(2);
      
      if (isNaN(percentIncrease)) {
        this.setState({ sellGainPercent: '' });
      } else {
        this.setState({ sellGainPercent: percentIncrease });
      }
    }

    this.setState({ sellGainPrice: sellGainPrice });
  }

  setSellLossPrice(sellLossPrice) {
    if (this.state.stockPrice) {
      const sellLossFloat = parseFloat(sellLossPrice);
      const stockPrice = parseFloat(this.state.stockPrice);
      const decrease = stockPrice - sellLossFloat;
      const percentDecrease = parseFloat((decrease / stockPrice) * 100).toFixed(2);

      if (isNaN(percentDecrease)) {
        this.setState({ sellLossPercent: '' });
      } else {
        this.setState({ sellLossPercent: percentDecrease });
      }
    }

    this.setState({ sellLossPrice: sellLossPrice });
  }

  setSellGainPercent(sellGainPercent) {
    if (this.state.stockPrice) {
      const sellGainFloat = parseFloat(sellGainPercent);
      const stockPrice = parseFloat(this.state.stockPrice);
      const priceDivide100 = stockPrice / 100;
      const priceGain = parseFloat((stockPrice + (priceDivide100 * sellGainFloat))).toFixed(2);

      if (isNaN(priceGain)) {
        this.setState({ sellGainPrice: '' });
      } else {
        this.setState({ sellGainPrice: priceGain });
      }
    }
    
    this.setState({ sellGainPercent: sellGainPercent });
  }

  setSellLossPercent(sellLossPercent) {
    if (this.state.stockPrice) {
      const sellLossFloat = parseFloat(sellLossPercent);
      const stockPrice = parseFloat(this.state.stockPrice);
      const priceDivide100 = stockPrice / 100;
      const priceLoss = parseFloat((stockPrice - (priceDivide100 * sellLossFloat))).toFixed(2);
      
      if (isNaN(priceLoss)) {
        this.setState({ sellLossPrice: '' });
      } else {
        this.setState({ sellLossPrice: priceLoss });
      }
    }
    
    this.setState({ sellLossPercent: sellLossPercent });
  }

  render () {
    return (
      <div className="position-calc">
        <div className="position-calc-header">
          Position Calculator
        </div>
        <div className="position-calc-body">
          <form className="position-calc-form">
            Price of stock <br/>
            <input 
              className="calc-txt-input" type="text" 
              name="stockPrice" value={this.state.stockPrice.toString()}
              onChange={(event) => this.setStockPrice(event.target.value)}/>
            Amount of stock <br/>
            <input className="calc-txt-input" type="text" 
              name="stockAmount" value={this.state.stockAmount.toString()}
              onChange={(event) => this.setStockAmount(event.target.value)}/>
            Sell gain price <br/>
            <input className="calc-txt-input" type="text" 
              name="sellGainPrice" value={this.state.sellGainPrice.toString()}
              onChange={(event) => this.setSellGainPrice(event.target.value)}/>
            Sell loss price <br/>
            <input className="calc-txt-input" type="text" 
              name="sellLossPrice" value={this.state.sellLossPrice.toString()}
              onChange={(event) => this.setSellLossPrice(event.target.value)}/>
            Sell gain percent <br/>
            <input className="calc-txt-input" type="text" 
              name="sellGainPercent" value={this.state.sellGainPercent.toString()}
              onChange={(event) => this.setSellGainPercent(event.target.value)}/>
            Sell loss percent <br/>
            <input className="calc-txt-input" type="text" 
              name="sellLossPercent" value={this.state.sellLossPercent.toString()}
              onChange={(event) => this.setSellLossPercent(event.target.value)}/>
          </form>
        </div>
        <div className="position-calc-footer">
          <button className="calc-submit-btn" onClick={() => this.props.resultFunc(this.state)}>Calculate</button>
        </div>
      </div>
    )
  }
}

export default PositionCalculator;