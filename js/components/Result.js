import React from 'react';
import classNames from 'classnames';
import convert from 'convert-units';

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

const renderNutrients = (nutrients) => {
  return nutrients
  .filter(({ units }) => units.indexOf('g') > -1)
  .map(({ nutr_no, nutrdesc, nutr_val, units }) => {
    if (units === 'µg') units = 'mcg';

    let { val, unit: bestUnit } = convert(nutr_val).from(units).toBest();

    const roundedBestValue = Math.floor(val * 10) / 10;

    if (bestUnit === 'mcg') bestUnit = 'µg';

    return (
      <li key={nutr_no} className="flex-row justify-space-between">
        <span>
          {nutrdesc}
        </span>
        <span>
          {roundedBestValue} {bestUnit}
        </span>
      </li>
    );
  });
};

const Result  = React.createClass({
  getInitialState() {
    return {
      isOpen: false,
      amount: ''
    };
  },

  handleClick(e) {
    if (!this.props.result.nutrients) {
      this.props.getFoodNutrients(this.props.result.ndb_no);
    }

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

  handleInputClick(e) {
    e.stopPropagation();
  },

  handleButtonClick(e) {
    e.stopPropagation();
  },

  handleAmountChange() {
    this.setState({
      amount: this.refs.amountInput.value
    });
  },

  render() {
    const {
      result: {
        long_desc,
        nutrients
      },
    } = this.props;

    const { amount, isOpen } = this.state;

    return (
      <li onClick={this.handleClick} className={liClasses}>
        <p className="padding-0">
          {long_desc}
        </p>
        {nutrients && isOpen ? (
          <div className="margin-4-top">
            <form className="margin-4-bottom" onSubmit={this.handleSubmit}>
              Add&nbsp;
              <input
                ref="amountInput"
                className="outline-none"
                value={amount}
                onChange={this.handleAmountChange}
                onClick={this.handleInputClick}
                type="text"
                name="amount"
              />&nbsp;
              grams&nbsp;
              <button type="submit" onClick={this.handleButtonClick}>
                Add
              </button>
            </form>
            <ul className="list-style-none padding-0">
              {renderNutrients(nutrients)}
            </ul>
          </div>
        ) : null}
        <span>
          +
        </span>
      </li>
    );
  }
});

export default Result;
