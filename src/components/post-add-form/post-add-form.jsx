import React, { Component } from 'react';
import './post-add-form.css';

class PostAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formInputValue: '',
    };

    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  changeInputHandler(evt) {
    this.setState(() => {
      return {
        formInputValue: evt.target.value,
      };
    });
  }

  submitFormHandler(evt) {
    evt.preventDefault();

    if (!this.state.formInputValue) return;

    this.props.onSubmitAddPost(this.state.formInputValue);
    this.setState(() => {
      return {
        formInputValue: '',
      };
    });
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.submitFormHandler}>
        <input
          type="text"
          placeholder="What are you thinking right now?"
          className="form-control new-post-label"
          onChange={this.changeInputHandler}
          value={this.state.formInputValue}
        />
        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>
    );
  }
}

export default PostAddForm;
