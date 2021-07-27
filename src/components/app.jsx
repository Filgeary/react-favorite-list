import React from 'react';

import AppHeader from './app-header/app-header';
import SearchPanel from './search-panel/search-panel';
import PostStatusFilter from './post-status-filter/post-status-filter';
import PostList from './post-list/post-list';
import PostAddForm from './post-add-form/post-add-form';

import './app.css';

// data from virtual API
const dataPostList = [
  {
    title: 'Very Short Text',
    important: true,
    like: false,
    id: Math.random(),
  },
  {
    title: 'Very Medium Title Record Text',
    important: false,
    like: true,
    id: Math.random(),
  },
  {
    title: 'Very very Long long Text Title Record',
    important: false,
    like: false,
    id: Math.random(),
  },
];

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
      <PostList posts={dataPostList} />
      <PostAddForm />
    </div>
  );
}

export default App;
