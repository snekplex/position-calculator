import React from 'react';

import '../scss/AppContainer.scss';

import CalcContainer from './calculator/CalcContainer';

class AppContainer extends React.Component {
  render () {
    return (
      <div className="app-container">
        <CalcContainer/>
      </div>
    )
  }
}

export default AppContainer;