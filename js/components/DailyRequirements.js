import React from 'react';
import { UNITS, dailyRequirements } from '../modules/constants';
import convert from 'convert-units';

const DailyRequirements = React.createClass({
  renderNutrientAmount(nutrNo, amount, units) {
    const { totalNutrition } = this.props;
    if (totalNutrition.size) {
      let amountOfDailyValue = (totalNutrition.get(nutrNo) || 0) / amount;
      amountOfDailyValue = amountOfDailyValue > 100 ? 100 : amountOfDailyValue;
      // console.log(nutrNo, amount, units, totalNutrition.get(nutrNo));
      return (
        <div
          className="position-absolute position-left position-top opacity-1 bg-black height-100"
          style={{width: `${amountOfDailyValue}%`}} />
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
        const key = nutrNo || name; // TODO: Use real IDs
        return (
          <li key={key} className="flex-row justify-space-between position-relative">
            <span>
              {name}
            </span>
            <span>

            </span>
            <span className="flex-row justify-center">
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
        <h3>
          Recommended Daily Intakes
        </h3>
        <ul className="flex-column list-style-none padding-0">
          {this.renderRequirements()}
        </ul>
      </div>
    );
  }
});

export default DailyRequirements;
