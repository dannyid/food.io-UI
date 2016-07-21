import React from 'react';
import FoodItem from './FoodItem';

const AddMeal  = React.createClass({
  getDefaultProps() {
    return {
      style: {
        div: {
          alignSelf: 'center',
          border: 'solid lightgrey',
          borderRadius: '3px',
          borderWidth: '1px 1px 1px 1px',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '14px',
          padding: '10',
          width: '100%'
        }
      }
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.addMeal();
  },

  renderFoodList() {
    return this.props.foodItems.map(foodItem => {
      return (
        <FoodItem
          key={foodItem.ndb_no}
          foodItem={foodItem}
          removeFoodItem={this.props.removeFoodItem}
        />
      );
    });
  },

  render() {
    return (
      <div className="add-meal" style={this.props.style.div}>
        <h3 style={{marginTop: 0}}>
          Add Meal
        </h3>
        <ul>
          {this.renderFoodList()}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            Add Meal
          </button>
        </form>
      </div>
    );
  }
});

export default AddMeal;
