import React from 'react';
import classNames from 'classnames';
import FoodItem from './FoodItem';

const baseStyles = classNames([
  'flex-column',
  'padding-2',
  'text-small',
  'border-1',
  'border-radius-2',
  'border-solid',
  'border-gray-lt'
]);

const AddMeal  = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.addMeal();
  },

  renderFoodList() {
    const { foodItems, removeFoodItem } = this.props;

    return foodItems.map(foodItem => {
      return (
        <FoodItem
          key={foodItem.id}
          foodItem={foodItem}
          removeFoodItem={removeFoodItem}
        />
      );
    });
  },

  render() {
    return (
      <div className={baseStyles}>
        <h3>
          Add Meal
        </h3>
        <ul className="padding-0 list-style-none">
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
