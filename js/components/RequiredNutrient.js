import React, { PropTypes } from 'react';
import convert from 'convert-units';

const RequiredNutrient = (
  {
    amountInMcg,
    nutrient: {
      name,
      amount: {
        recommended,
        min,
        max
      }
    }
  }
) => {
  const recommendedValueInMcg = recommended || (max + min) / 2 || 0; // TODO: Fix this math
  let { val, unit: bestUnit } = convert(recommendedValueInMcg).from('mcg').toBest();
  const roundedBestValue = Math.round(val * 10) / 10;
  if (bestUnit === 'mcg') bestUnit = 'µg';

  // DV === daily value
  const percentageOfDV = amountInMcg / recommendedValueInMcg * 100;
  return (
    <li className="flex-row justify-space-between position-relative">
      <span>
        {name}
      </span>
      <span>

      </span>
      <span className="flex-row justify-center">
        <span>
          {roundedBestValue}
        </span>
        <span>
          &nbsp;
        </span>
        <span>
          {bestUnit}
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
  amountInMcg: PropTypes.number.isRequired
};

export default RequiredNutrient;
