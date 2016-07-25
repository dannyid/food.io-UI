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
      nutrients.forEach(({ nutr_no, nutrdesc, nutr_val, units }) => {
        if (typeof totalNutrition[nutr_no] === 'undefined') {
          totalNutrition[nutr_no] = 0;
        }
        totalNutrition[nutr_no] += (amount * parseInt(nutr_val, 10));
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
