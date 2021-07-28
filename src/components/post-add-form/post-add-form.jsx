import React from 'react';
import './post-add-form.css';

const PostAddForm = ({ onSubmitAddPost }) => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What are you thinking right now?"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={onSubmitAddPost}
      >
        Add Record
      </button>
    </form>
  );
};

export default PostAddForm;
