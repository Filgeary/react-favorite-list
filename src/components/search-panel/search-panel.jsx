import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.changeInputHandler = this.changeInputHandler.bind(this);
  }

  changeInputHandler(evt) {
    this.setState(() => {
      return {
        inputValue: evt.target.value,
      };
    });

    this.props.onChangeInput(evt.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        name="search-panel"
        placeholder="Find Post"
        value={this.state.inputValue}
        onChange={this.changeInputHandler}
      />
    );
  }
}

export default SearchPanel;
