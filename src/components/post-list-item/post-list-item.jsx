import React from 'react';

import iconStar from './star-fill.svg';
import iconTrash from './trash-fill.svg';
import iconHeart from './heart-fill.svg';
import './post-list-item.css';

const PostListItem = ({
  title,
  important,
  like,
  onRemovePost,
  onToggleImportant,
  onToggleLiked,
}) => {
  let classList = 'app-list-item d-flex justify-content-between';

  if (important) classList += ' important';
  if (like) classList += ' like';

  return (
    <li className={classList}>
      <span className="app-list-item-label" onClick={onToggleLiked}>
        {title}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm"
          onClick={onToggleImportant}
        >
          <img src={iconStar} alt="#" />
        </button>
        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={onRemovePost}
        >
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
