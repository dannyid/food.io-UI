import React from 'react';

const FoodItem  = React.createClass({
  getDefaultProps() {
    return {
      style: {
        li: {
          padding: 10
        }
      }
    }
  },
  
  handleRemoveClick(e) {
    e.preventDefault();
    this.props.removeFoodItem(this.props.foodItem.id);
  },

  render() {
    return (
      <li>
        {this.props.foodItem.foodItem.long_desc.substr(0,50).trim()}... : {this.props.foodItem.amount} grams&nbsp;
        <a href="" onClick={this.handleRemoveClick}>
          x
        </a>
      </li>
    );
  }
});

export default FoodItem;
