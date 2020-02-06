import React from 'react';
import './scss/App.scss';

import AppHeader from './components/header';
import AppContainer from './components/container';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppContainer/>
    </div>
  );
}

export default App;
