import React from 'react';

const Input = React.createClass({
  handleChange() {
    this.props.updateSearchTerms(this.refs.input.value.split(' '));
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchForFood(this.props.searchTerms);
  },

  render() {
    const { searchTerms } = this.props;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex-column align-items-stretch"
      >
        <input
          ref="input"
          onChange={this.handleChange}
          className="h4 flex-row border-1 border-solid border-gray-lt border-radius-3 padding-2 outline-none"
          type="text"
          value={searchTerms.join(' ')}
        />
      </form>
    );
  }
});

export default Input;
