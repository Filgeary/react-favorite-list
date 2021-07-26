import React from 'react';

import AppHeader from './app-header/app-header';
import SearchPanel from './search-panel/search-panel';
import PostStatusFilter from './post-status-filter/post-status-filter';
import PostList from './post-list/post-list';
import PostAddForm from './post-add-form/post-add-form';

import './app.css';

function App() {
  return (
    <div className="app">
      <h1>React-favorite-list</h1>
      <hr />
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
}

export default App;
