import React from 'react';
import classNames from 'classnames';

const liClasses = classNames([
  'flex-row',
  'justify-space-between',
  'align-items-center',
  'border-solid',
  'border-1',
  'border-blue-lt',
  'border-radius-1',
  'margin-2-bottom'
]);

const linkClasses = classNames([
  'hover-darken',
  'bg-white',
  'text-grey',
  'padding-3-sides',
  'padding-2-vert',
  'border-1-left',
  'border-0-vert',
  'border-0-right',
  'border-solid',
  'border-blue-lt',
  'decoration-none'
]);

const FoodItem  = React.createClass({
  handleRemoveClick(e) {
    e.preventDefault();
    this.props.removeFoodItem(this.props.foodItem.id);
  },

  render() {
    const {
      foodItem: {
        amount,
        foodItem: {
          long_desc
        }
      }
    } = this.props;

    return (
      <li className={liClasses}>
        <span className="ellipsis margin-2">
          {long_desc}
        </span>
        <div className="flex-row align-items-center">
          <span className="margin-3-sides nowrap">
            {amount} g
          </span>
          <a
            className={linkClasses}
            href="" onClick={this.handleRemoveClick}
          >
            x
          </a>
        </div>
      </li>
    );
  }
});

export default FoodItem;
