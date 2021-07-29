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
      searchPanelInputValue: '',
    };

    this.addPostHandler = this.addPostHandler.bind(this);
    this.removePostHandler = this.removePostHandler.bind(this);
    this.changeInputHandler = this.changeInputHandler.bind(this);
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

  findPost(postList, value) {
    if (value.length === 0) return postList;

    return postList.filter(item => {
      return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

  changeInputHandler(value) {
    this.setState(() => {
      return {
        searchPanelInputValue: value,
      };
    });
  }

  render() {
    const { data, searchPanelInputValue } = this.state;

    const visiblePosts = this.findPost(data, searchPanelInputValue);

    return (
      <div className="app">
        <h1>React-favorite-list</h1>
        <hr />
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel onChangeInput={this.changeInputHandler} />
          <PostStatusFilter />
        </div>
        <PostList posts={visiblePosts} onRemovePost={this.removePostHandler} />
        <PostAddForm onSubmitAddPost={this.addPostHandler} />
      </div>
    );
  }
}

export default App;
