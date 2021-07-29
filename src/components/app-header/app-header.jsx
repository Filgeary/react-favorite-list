import React from 'react';
import './app-header.css';

const AppHeader = ({ totalPosts, likedPosts }) => {
  return (
    <div className="app-header d-flex">
      <h2>UserName</h2>
      <h3>
        {totalPosts} posts, {likedPosts} liked
      </h3>
    </div>
  );
};

export default AppHeader;
