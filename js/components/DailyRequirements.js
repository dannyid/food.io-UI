import React from 'react';
import RequiredNutrient from './RequiredNutrient'
import { UNITS, dailyRequirements } from '../modules/constants';
import convert from 'convert-units';

const calculateTotalNutrition = (foodItems) => {
  return foodItems
  .reduce((
    totalNutrition,
    {
      amount,
      foodItem: {
        nutrients
      }
    }
  ) => {
    nutrients
    // Remove nutrients that aren't in some form of grams
    // Like IUs for some vitamins
    .filter(({ units }) => units.indexOf('g') > -1)
    .forEach(({ nutr_no, nutrdesc, nutr_val, units }) => {
      // Convert micrograms to something convert() understands
      if (units === 'µg') units = 'mcg';
      if (typeof totalNutrition[nutr_no] === 'undefined') {
        totalNutrition[nutr_no] = 0;
      }

      const nutrValInMicrograms = convert(+nutr_val).from(units).to('mcg');
      // Since nutrition data in the database is per 100 g, but we store all
      // nutrient data in µg, we must divide the number of grams given by the user by 100
      totalNutrition[nutr_no] = Math.floor((totalNutrition[nutr_no] + (amount / 100 * nutrValInMicrograms)) * 10) / 10;
    });
    return totalNutrition;
  }, {});
};

const renderRequirements = (foodItems) => {
  const totalNutrition = calculateTotalNutrition(foodItems);
  return dailyRequirements
    .sort((a, b) => {
      return (a.sortOrder || 1000000) - (b.sortOrder || 1000000);
    })
    .filter(({ nutrNo }) => nutrNo)
    .map((nutrient) => {
      const key = nutrient.nutrNo || nutrient.name; // TODO: Use real IDs
      return (
        <RequiredNutrient
          key={key}
          nutrient={nutrient}
          amountOfDailyValue={totalNutrition[nutrient.nutrNo] || 0} />
      )
    });
};

const DailyRequirements = ({ foodItems }) => {
  return (
    <div className="daily-requirements">
      <h3>
        Recommended Daily Intakes
      </h3>
      <ul className="flex-column list-style-none padding-0">
        {renderRequirements(foodItems)}
      </ul>
    </div>
  );
};

export default DailyRequirements;
