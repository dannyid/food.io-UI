import React, { PropTypes } from 'react';

const RequiredNutrient = ({
  amountOfDailyValue,
  nutrient: {
    name,
    amount: {
      recommended,
      min,
      max
      },
    units
  }
}) => {
  const dailyValue = recommended || (max - min) / 2 || 0; // TODO: Fix this math
  return (
    <li className="flex-row justify-space-between position-relative">
      <span>
        {name}
      </span>
      <span>

      </span>
      <span className="flex-row justify-center">
        <span>
          {dailyValue}
        </span>
        <span>
          &nbsp;
        </span>
        <span>
          {units}
        </span>
      </span>
      <div
        className="position-absolute position-left position-top opacity-1 bg-black height-100"
        style={{width: `${amountOfDailyValue}%`}} />
    </li>
  );
};

RequiredNutrient.propTypes = {
  nutrient: PropTypes.object.isRequired,
  amountOfDailyValue: PropTypes.number.isRequired
};

export default RequiredNutrient;
