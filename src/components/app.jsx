import React from 'react';

import AppHeader from './app-header/app-header';
import SearchPanel from './search-panel/search-panel';

import './app.css';

function App() {
  return (
    <div className="app">
      <h1>React-favorite-list</h1>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
      </div>
    </div>
  );
}

export default App;
