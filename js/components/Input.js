import React from 'react';

const Input = React.createClass({
  getInitialState() {
    return {
      searchTerms: ['pizza']
    }
  },

  componentWillMount() {
    this.props.searchForFood(this.state.searchTerms);
  },

  handleChange() {
    this.setState({
      searchTerms: this.refs.input.value.split(' ')
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchForFood(this.state.searchTerms);
  },

  render() {
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
          value={this.state.searchTerms.join(' ')}
        />
      </form>
    );
  }
});

export default Input;
