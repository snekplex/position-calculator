import React from 'react';

import '../scss/AppContainer.scss';

import CalcContainer from './calculator/CalcContainer';
import ResultContainer from './calculator/ResultContainer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsVisible: false,
      resultsInputs: {}
    };

    this.updateCalcResults = this.updateCalcResults.bind(this);
    this.closeResults = this.closeResults.bind(this);
  }

  updateCalcResults(results) {
    this.setState({
      resultsInputs: results
    });
    this.closeResults();
  };

  closeResults() {
    this.setState({
      resultsVisible: !this.state.resultsVisible
    });
  }

  render () {
    return (
      <div className="app-container">
        <CalcContainer 
          calcFunc={this.updateCalcResults}
          closeFunc={this.closeResults}
        />
        <ResultContainer 
          visible={this.state.resultsVisible}
          inputs={this.state.resultsInputs}
          closeFunc={this.closeResults}
        />
      </div>
    )
  }
}

export default AppContainer;