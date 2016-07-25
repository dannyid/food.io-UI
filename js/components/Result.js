import React from 'react';
import classNames from 'classnames';

const liClasses = classNames([
  'bg-white',
  'hover-darken',
  'border-0',
  'border-1-bottom',
  'border-solid',
  'border-gray-lt',
  'cursor-pointer',
  'list-style-none',
  'padding-2'
]);

const Result  = React.createClass({
  getInitialState() {
    return {
      isOpen: false,
      amount: ''
    };
  },

  handleClick(e) {
    this.props.getFoodNutrients(this.props.result.ndb_no);
    this.setState({
      isOpen: !this.state.isOpen
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.addFoodToMeal({
      id: Math.floor(Math.random() * 10000000000),
      foodItem: this.props.result,
      amount: this.state.amount
    });
  },

  handleButtonClick(e) {
    e.stopPropagation();
  },

  handleAmountChange() {
    this.setState({
      amount: this.refs.amountInput.value
    });
  },

  renderNutrients() {
    const { nutrients } = this.props.result;
    if (nutrients && this.state.isOpen) {
      return nutrients.map(({ nutr_no, nutrdesc, nutr_val, units }) => {
        return (
          <li key={nutr_no}>
            ({nutr_no}) {nutrdesc} - {nutr_val} {units}
          </li>
        );
      });
    }
  },

  render() {
    const {
      result: {
        long_desc,
        ndb_no
      },
    } = this.props;

    return (
      <li onClick={this.handleClick} className={liClasses}>
        <p>
          {long_desc}
        </p>
        <br />
        <form onSubmit={this.handleSubmit}>
          Add&nbsp;
          <input
            ref="amountInput"
            className="outline-none"
            value={this.state.amount}
            onChange={this.handleAmountChange}
            type="text"
            name="amount"
          />&nbsp;
          grams&nbsp;
          <button type="submit" onClick={this.handleButtonClick}>
            Add
          </button>
        </form>
        <br />
        <ul className="list-style-none">
          {this.renderNutrients()}
        </ul>
        <span>
          +
        </span>
      </li>
    );
  }
});

export default Result;
