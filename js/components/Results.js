import React from 'react';
import Result from './Result';

const Results  = React.createClass({
  renderListItems() {
    return this.props.results.map(result => {
      return (
        <Result
          key={result.ndb_no}
          result={result}
          addFoodToMeal={this.props.addFoodToMeal}
          getFoodNutrients={this.props.getFoodNutrients}
        />
      );
    });
  },

  render() {
    return (
      <ul className="border-1 border-solid border-gray-lt border-radius-2 flex-column padding-0">
        {this.renderListItems()}
      </ul>
    );
  }
});

export default Results;
