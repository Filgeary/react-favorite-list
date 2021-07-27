import React, { Component } from 'react';

import iconStar from './star-fill.svg';
import iconTrash from './trash-fill.svg';
import iconHeart from './heart-fill.svg';
import './post-list-item.css';

class PostListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      important: this.props.important,
      like: this.props.like,
    };

    this.onImportantHandler = this.onImportantHandler.bind(this);
    this.onLikeHandler = this.onLikeHandler.bind(this);
  }

  onImportantHandler() {
    this.setState(({ important }) => ({ important: !important }));
  }

  onLikeHandler() {
    this.setState(({ like }) => ({ like: !like }));
  }

  render() {
    const { title } = this.props;
    const { important, like } = this.state;

    let classList = 'app-list-item d-flex justify-content-between';

    if (important) classList += ' important';
    if (like) classList += ' like';

    return (
      <li className={classList}>
        <span className="app-list-item-label" onClick={this.onLikeHandler}>
          {title}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportantHandler}
          >
            <img src={iconStar} alt="#" />
          </button>
          <button type="button" className="btn-trash btn-sm">
            <img src={iconTrash} alt="#" />
          </button>
          <button type="button" className="btn-heart btn-sm">
            <img src={iconHeart} alt="#" />
          </button>
        </div>
      </li>
    );
  }
}

export default PostListItem;
