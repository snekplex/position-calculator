import React from 'react';
import '../scss/AppHeader.scss';

class AppHeader extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-app-name">
          <div id="app-header-logo">Position Calc</div>
        </div>
        <div className="header-left-links">
          <ul className="header-link-list">
            <li>
              <a href="https://github.com/snekplex/position-calculator">
                <img 
                  className="github-32-logo" 
                  alt="Github Logo"
                  src={window.location.origin + '/GitHub-Mark-Light-32px.png'}>
                </img>
                Github
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default AppHeader;