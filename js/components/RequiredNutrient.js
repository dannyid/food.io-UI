import React, { PropTypes } from 'react';
import convert from 'convert-units';

const RequiredNutrient = ({
  amountOfDV,
  nutrient: {
    name,
    nutrNo,
    amount: {
      recommended,
      min,
      max
    }
  }
}) => {
  const recommendedValueInMicrograms = recommended || (max - min) / 2 || 0;
  let { val, unit } = convert(recommendedValueInMicrograms).from('mcg').toBest(); // TODO: Fix this math
  val = Math.round(val * 10) / 10;
  if (unit === 'mcg') unit = 'µg';

  const percentageOfDV = amountOfDV / recommendedValueInMicrograms * 100;
  return (
    <li className="flex-row justify-space-between position-relative">
      <span>
        {name}
      </span>
      <span>

      </span>
      <span className="flex-row justify-center">
        <span>
          {val}
        </span>
        <span>
          &nbsp;
        </span>
        <span>
          {unit}
        </span>
      </span>
      <div
        className="position-absolute position-left position-top opacity-1 bg-black height-100"
        style={{width: `${percentageOfDV}%`}} />
    </li>
  );
};

RequiredNutrient.propTypes = {
  nutrient: PropTypes.object.isRequired,
  amountOfDV: PropTypes.number.isRequired
};

export default RequiredNutrient;
