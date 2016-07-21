import React from 'react';
import Result from './Result';

const Results  = React.createClass({
  getDefaultProps() {
    return {
      style: {
        ul: {
          alignSelf: 'center',
          border: 'solid lightgrey',
          borderRadius: '3px',
          borderWidth: '0 0 1px 1px',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '14px',
          padding: '0',
          width: '100%'
        }
      }
    }
  },

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
      <ul style={this.props.style.ul}>
        {this.renderListItems()}
      </ul>
    );
  }
});

export default Results;
