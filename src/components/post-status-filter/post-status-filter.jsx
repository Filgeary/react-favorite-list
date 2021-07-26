import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">
        All
      </button>
      <button type="button" className="btn btn-secondary">
        Liked
      </button>
    </div>
  );
};

export default PostStatusFilter;
