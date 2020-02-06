import React from 'react';
import './scss/App.scss';

import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppContainer/>
    </div>
  );
}

export default App;
