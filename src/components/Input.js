import React from 'react';

const Input  = React.createClass({
  getDefaultProps() {
    return {
      style: {
        form: {
          alignItems: 'stretch',
          display: 'flex',
          flexDirection: 'column'
        },
        input: {
          border: '1px solid lightgrey',
          borderRadius: 3,
          display: 'flex',
          fontSize: 18,
          outline: 'none',
          padding: 10
        }
      }
    };
  },

  handleChange(e) {
    this.props.updateSearchTerms(e.target.value.split(' '));
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchForFood(this.props.searchTerms);
  },

  render() {
    const {
      handleChange,
      handleSubmit,
      props: {
        searchTerms,
        style: {
          form: formStyle,
          input: inputStyle
        }
      }
    } = this;

    return (
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          onChange={handleChange}
          style={inputStyle}
          type="text"
          value={searchTerms.join(' ')}
        />
      </form>
    );
  }
});

export default Input;
