import React from 'react';

import iconStar from './star-fill.svg';
import iconTrash from './trash-fill.svg';
import iconHeart from './heart-fill.svg';
import './post-list-item.css';

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">
        Very very Long long Text Title Record
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
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
};

export default PostListItem;
