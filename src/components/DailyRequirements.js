import React from 'react';
import { UNITS, dailyRequirements } from '../modules/constants/constants';
import convert from 'convert-units';

const ulStyle = {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0
};

const liStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative'
};

const DailyRequirements = React.createClass({
  renderNutrientAmount(requiredNutrientNumber, requiredAmount, requiredUnit) {
    const { totalNutrition } = this.props;
    if (totalNutrition.size) {
      const amountOfDailyValue = (totalNutrition.get(requiredNutrientNumber) || 0) / requiredAmount;
      // console.log(requiredNutrientNumber, requiredAmount, requiredUnit, totalNutrition.get(requiredNutrientNumber));
      return (
        <div style={{height: '100%', width: `${amountOfDailyValue}%`, backgroundColor: '#000', position: 'absolute', left: 0, top: 0, opacity: 0.1}} />
      );
    }
  },

  renderRequirements() {
    return dailyRequirements
      .sort((a, b) => {
        return (a.sortOrder || 1000000) - (b.sortOrder || 1000000);
      })
      .filter(({ nutrNo }) => nutrNo)
      .map(({
        nutrNo,
        name,
        amount: {
          recommended,
          min,
          max
        },
        units
      }) => {
        const amount = recommended || (max - min) / 2 || 0;
        const key = nutrNo || name;
        return (
          <li key={key} style={liStyle}>
            <span>
              {name}
            </span>
            <span>

            </span>
            <span style={{display: 'flex', justifyContent: 'center'}}>
              <span>
                {amount}
              </span>
              <span>
                &nbsp;
              </span>
              <span>
                {units}
              </span>
            </span>
            {this.renderNutrientAmount(nutrNo, amount, units)}
          </li>
        );
      });
  },

  render() {
    return (
      <div className="daily-requirements">
        <h3>Recommended Daily Intakes</h3>
        <ul style={ulStyle}>
          {this.renderRequirements()}
        </ul>
      </div>
    );
  }
});

export default DailyRequirements;
