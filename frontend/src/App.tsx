import React from 'react';
import './App.scss';
import './custom.scss';
import TestAPI from './components/TestAPI'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron text-center">
          <h1>TypeScript/Express/React/MongoDB blank</h1>
          <p>with Bootstrap/SASS/Jest</p>
        </div>
        <div>
          <div className="button">
            <TestAPI />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
