import React from 'react';

import '../scss/AppContainer.scss';

import CalcContainer from './calculator/CalcContainer';
import ResultContainer from './calculator/ResultContainer';

class AppContainer extends React.Component {
  state = {
    resultsVisible: false,
    calcResults: {}
  }

  updateCalcResults(results) {
    console.log(results);
  };

  render () {
    return (
      <div className="app-container">
        <CalcContainer calcFunc={this.updateCalcResults}/>
        <ResultContainer calcResults={this.state.calcResults}/>
      </div>
    )
  }
}

export default AppContainer;