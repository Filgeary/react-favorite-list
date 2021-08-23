import React from 'react';
import './post-status-filter.css';

const buttonsList = [
  {
    title: 'All',
    filterValue: 'all',
  },
  {
    title: 'Liked',
    filterValue: 'like',
  },
];

const PostStatusFilter = ({ filter, onFilterSelect }) => {
  const buttonComponents = buttonsList.map(({ title, filterValue }) => {
    const activeFilter = filterValue === filter;
    const classList = activeFilter ? 'btn-secondary' : 'btn-outline-secondary';

    return (
      <button
        type="button"
        className={`btn ${classList}`}
        key={title}
        onClick={() => onFilterSelect(filterValue)}
      >
        {title}
      </button>
    );
  });

  return <div className="btn-group">{buttonComponents}</div>;
};

export default PostStatusFilter;
