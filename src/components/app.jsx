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
      postStatusFilterValue: 'all',
    };

    this.addPostHandler = this.addPostHandler.bind(this);
    this.removePostHandler = this.removePostHandler.bind(this);
    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.toggleImportantHandler = this.toggleImportantHandler.bind(this);
    this.toggleLikedHandler = this.toggleLikedHandler.bind(this);
    this.filterSelectHandler = this.filterSelectHandler.bind(this);
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

  changeStateByProp(id, prop) {
    this.setState(({ data }) => {
      const index = data.findIndex(item => item.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, [prop]: !oldItem[prop] };
      const newArr = [...data];
      newArr.splice(index, 1, newItem);

      return {
        data: newArr,
      };
    });
  }

  toggleImportantHandler(id) {
    this.changeStateByProp(id, 'important');
  }

  toggleLikedHandler(id) {
    this.changeStateByProp(id, 'like');
  }

  filterPosts(postList, filter) {
    switch (filter) {
      case 'like':
        return postList.filter(item => item.like);

      default:
        return postList;
    }
  }
  filterSelectHandler(filter) {
    this.setState(() => {
      return {
        postStatusFilterValue: filter,
      };
    });
  }

  render() {
    const { data, searchPanelInputValue, postStatusFilterValue } = this.state;

    const totalPostsCount = data.length;
    const likedPostsCount = [...data].filter(item => item.like).length;
    const visiblePosts = this.filterPosts(
      this.findPost(data, searchPanelInputValue),
      postStatusFilterValue,
    );

    return (
      <div className="app">
        <h1>React-favorite-list</h1>
        <hr />

        <AppHeader totalPosts={totalPostsCount} likedPosts={likedPostsCount} />

        <div className="search-panel d-flex">
          <SearchPanel onChangeInput={this.changeInputHandler} />
          <PostStatusFilter
            filter={postStatusFilterValue}
            onFilterSelect={this.filterSelectHandler}
          />
        </div>

        <PostList
          posts={visiblePosts}
          onRemovePost={this.removePostHandler}
          onToggleImportant={this.toggleImportantHandler}
          onToggleLiked={this.toggleLikedHandler}
        />
        <PostAddForm onSubmitAddPost={this.addPostHandler} />
      </div>
    );
  }
}

export default App;
