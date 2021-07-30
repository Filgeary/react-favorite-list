import React from 'react';

import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({
  posts,
  onRemovePost,
  onToggleImportant,
  onToggleLiked,
}) => {
  const elements = posts
    .filter(item => {
      return typeof item === 'object' && Object.keys(item).length > 0;
    })
    .map(item => {
      const { id, ...itemProps } = item;

      return (
        <PostListItem
          key={id}
          {...itemProps}
          onRemovePost={() => onRemovePost(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      );
    });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
