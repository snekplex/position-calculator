import React from 'react';
import * as Scroll from 'react-scroll';

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
    }, () => {
      if (this.state.resultsVisible) {
        Scroll.animateScroll.scrollToBottom();
      } else {
        Scroll.animateScroll.scrollToTop();
      }
    });
  }

  render () {
    return (
      <div className="app-container">
        <Scroll.Element className="scroll-element">
          <CalcContainer
            calcFunc={this.updateCalcResults}
            closeFunc={this.closeResults}
          />
          <ResultContainer 
            visible={this.state.resultsVisible}
            inputs={this.state.resultsInputs}
            closeFunc={this.closeResults}
          />
        </Scroll.Element>
      </div>
    )
  }
}

export default AppContainer;