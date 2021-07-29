import React, { Component } from 'react';

// components
import AppHeader from './app-header/app-header';
import SearchPanel from './search-panel/search-panel';
import PostStatusFilter from './post-status-filter/post-status-filter';
import PostList from './post-list/post-list';
import PostAddForm from './post-add-form/post-add-form';

// data from virtual API
import { data as dataPostList } from '../data/data';

// css
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dataPostList,
    };

    this.addPostHandler = this.addPostHandler.bind(this);
    this.removePostHandler = this.removePostHandler.bind(this);
  }

  addPostHandler(body) {
    const newPost = {
      title: body,
      important: false,
      like: false,
      id: Math.random(),
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newPost],
      };
    });
  }

  removePostHandler(id) {
    this.setState(({ data }) => {
      const newData = [...data].filter(item => item.id !== id);

      return {
        data: newData,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <h1>React-favorite-list</h1>
        <hr />
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          onRemovePost={this.removePostHandler}
        />
        <PostAddForm onSubmitAddPost={this.addPostHandler} />
      </div>
    );
  }
}

export default App;
