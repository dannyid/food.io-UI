import React from 'react';

const Result  = React.createClass({
  getInitialState() {
    return {
      isOpen: false,
      amount: null

    };
  },

  getDefaultProps() {
    return {
      style: {
        li: {
          border: 'solid lightgrey',
          borderWidth: '1px 1px 0 0',
          cursor: 'pointer',
          listStyle: 'none',
          padding: '10px'
        },
        p: {
          margin: 0,
          padding: 0
        }
      }
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
      id: Math.random(),
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
    const {nutrients} = this.props.result;
    if (nutrients && this.state.isOpen) {
      return nutrients.map(n => {
        let { nutr_no, nutrdesc, nutr_val, units } = n;

        // convert to grams
        // switch(units) {
        //   case 'µg':
        //     nutr_val = nutr_val / 1000000;
        //     units = 'g';
        //     break;
        //   case 'mg':
        //     nutr_val = nutr_val / 1000;
        //     units = 'g';
        //     break;
        // }

        return (
          <li key={nutr_no}>
            {nutrdesc} - {nutr_val} {units}
          </li>
        );
      });
    }
  },

  render() {
    const {
      handleClick,
      renderNutrients,
      props: {
        result: {
          long_desc,
          ndb_no
        },
        style: {
          li: liStyle,
          p: pStyle
        }
      }
    } = this;

    return (
      <li onClick={handleClick} style={liStyle}>
        <p style={pStyle}>
          {long_desc}
        </p>
        <br />
        <form onSubmit={this.handleSubmit}>
          Add&nbsp;
          <input
            ref="amountInput"
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
        <ul>
          {renderNutrients()}
        </ul>
        <span>
          +
        </span>
      </li>
    );
  }
});

export default Result;
